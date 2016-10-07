(ns peli.impl.collision
  (:require [peli.protocols :as p]
            [peli.impl.phy-math :refer [sub add dot cross-vr cross-rv
                                        cross-vv mul-vr dist-sqr mmul42
                                        perp transpose div-vr normalize
                                        sqrt floor ceil infinity
                                        neg-infinity]]))

;; ---------------------------------------------------------------------
;; Broad Phase
(defn cell-key [row col]
  (+ (* row 1000) col))

(defn- matrix-bounds [block-size [[x1 y1] [x2 y2]]]
  (let [col (max (floor (/ x1 block-size)) 0)
        row (max (floor (/ y1 block-size)) 0)
        max-col (max (floor (/ x2 block-size)) 0)
        max-row (max (floor (/ y2 block-size)) 0)]
    [col row max-col max-row]))


(defn- add-item-to-matrix [matrix block-size {:keys [id] :as item}]
  (let [[col row max-col max-row] (matrix-bounds block-size (p/bounds (p/shape item)))]
    (reduce (fn [matrix row]
              (reduce (fn [matrix col]
                        (let [ky (cell-key row col)
                              val (get matrix ky)
                              pairs (get matrix :pairs)]
                          (-> (assoc! matrix ky (if val (conj val id) [id]))
                              (assoc! :pairs (reduce (fn [pairs pair]
                                                       (conj! pairs pair))
                                                     pairs
                                                     (map #(do #{id %}) val))))))
                      matrix
                      (range col (inc max-col))))
            matrix
            (range row (inc max-row)))))


(defn generate-pairs
  "takes a block size and list of items and returns a tuple
   consisting of collision pairs and the collision matrix"
  [block-size items]
  (let [matrix (reduce (fn [matrix item]
                         (add-item-to-matrix matrix block-size item))
                       (transient {:pairs (transient #{})})
                       items)
        pairs (persistent! (get matrix :pairs))
        matrix (persistent! (dissoc! matrix :pairs))]
    [pairs matrix]))

;; ---------------------------------------------------------------------
;; Narrow Phase

(defrecord Collision [contacts
                      depth
                      penetration
                      normal
                      tangent
                      restitution
                      dynamic-friction
                      static-friction
                      separation
                      a
                      b
                      active?])

(defn collision->
  ([{:keys [contacts depth normal a b]}]
   (collision-> contacts depth normal a b))
  ([contacts depth normal a b]
   (Collision. contacts
               depth
               (mul-vr normal depth)
               normal
               (perp normal)
               (min (p/restitution a) (p/restitution b))
               (sqrt (* (p/dynamic-friction a) (p/dynamic-friction b)))
               (sqrt (* (p/static-friction a) (p/static-friction b)))
               0.0
               a
               b
               true)))

(def rel-bias 0.95)
(def abs-bias 0.01)

(defn bias-greater-than [a b]
  (>= a (+ (* b rel-bias)
           (* a abs-bias))))

;; ---------------------------------------------------------------------
;; Circle to Circle Collision

(defn circle->circle [a b]
  (let [normal (sub (p/position b) (p/position a))
        dist-sqr (dist-sqr normal)
        total-r (+ (p/radius a) (p/radius b))]
    (when (< dist-sqr (* total-r total-r))
      (let [dist (sqrt dist-sqr)]
        (if (= 0.0 dist)
          (collision-> [(p/position a)] (p/radius a) [1 0] a b)
          (let [normal (div-vr normal dist)
                contacts [(add (mul-vr normal (p/radius a))
                               (p/position a))]]
            (collision-> contacts (- total-r dist) normal a b)))))))

;; ---------------------------------------------------------------------
;; Circle to Poly and Poly to Circle Collision

(defn circle->poly [a b]
  (let [;; Translate a into b's local space
        radius (p/radius a)
        center (mmul42 (transpose (p/rotation-matrix b))
                       (sub (p/position a) (p/position b)))
        points (p/rel-points b)
        normals (p/normals b)
        [n-idx sep] (reduce
                     (fn [[n-idx sep] idx]
                       (let [n-sep (dot (nth normals idx)
                                               (sub center
                                                 (nth points idx)))]
                         (cond
                           (> n-sep (p/radius a)) ;; no collision
                           (reduced nil)

                           (> n-sep sep)
                           [idx n-sep]

                           :else
                           [n-idx sep])))
                     [0 neg-infinity]
                     (range (count points)))
        ;;get contact edge
        edge (when n-idx
               [(nth points n-idx) (nth points (mod (inc n-idx) (count points)))])]
    ;; Is center in the polygon
    (when n-idx
      (if (< sep 0.0001)
        (let [normal (mul-vr (mmul42 (p/rotation-matrix b)
                                     (nth normals n-idx)) -1.0)]
          (collision-> [(add (mul-vr normal radius)
                            (p/position a))]
                      radius
                      normal
                      a
                      b))
        ;;find correct voronoi region
        (let [[v1 v2] edge
              dot1 (dot (sub center v1) (sub v2 v1))
              dot2 (dot (sub center v2) (sub v1 v2))
              depth (- radius sep)]
          (cond
            ;;closer to v1
            (<= dot1 0.0)
            (when (<= (dist-sqr center v1)
                      (* radius radius))
              (let [normal (normalize
                            (mmul42 (p/rotation-matrix b)
                                    (sub v1 center)))
                    contact (add (mmul42 (p/rotation-matrix b) v1)
                                 (p/position b))]
                (collision-> [contact] depth normal a b)))

            ;;closer to v2
            (<= dot2 0.0)
            (when (<= (dist-sqr center v2)
                      (* radius radius))
              (let [normal (normalize
                            (mmul42 (p/rotation-matrix b)
                                    (sub v2 center)))
                    contact (add (mmul42 (p/rotation-matrix b) v2)
                                 (p/position b))]
                (collision-> [contact] depth normal a b)))

            ;;closest to face
            :else
            (let [normal (mul-vr (mmul42 (p/rotation-matrix b)
                                         (nth normals n-idx))
                                 -1.0)
                  contact (add (mul-vr normal radius)
                               (p/position a))]
              (collision-> [contact] depth normal a b))))))))


(defn poly->circle [body1 body2]
  (when-let [collision (circle->poly body2 body1)]
    (collision->
     (-> (update collision :normal mul-vr -1.0)
         (assoc :a (:b collision))
         (assoc :b (:a collision))))))

;; ---------------------------------------------------------------------
;; Poly to Poly Collision

(defn get-support [body dir]
  (let [[p1 & points] (p/rel-points body)]
    (first
     (reduce (fn [[best-point best-proj] point]
               (let [proj (dot point dir)]
                 (if (> proj best-proj)
                   [point proj]
                   [best-point best-proj])))
             [p1 (dot p1 dir)]
             points))))


(defn find-axis-least-depth [a b]
  (let [normals (p/normals a)
        points (p/rel-points a)
        a-rot-mat (p/rotation-matrix a)
        b-rot-mat (p/rotation-matrix b)
        b-pos (p/position b)
        a-pos (p/position a)
        b-rot-mat-trans (transpose b-rot-mat)]
    (reduce (fn [[best-axis depth] idx]
              (let [;; retrieve face normal from A
                    n-tmp (nth normals idx)
                    nw (mmul42 a-rot-mat n-tmp)
                    ;;transform faces normal to B's local space
                    norm (mmul42 b-rot-mat-trans nw)
                    ;;retrieve support point
                    sup-point (get-support b (mul-vr norm -1.0))
                    ;;retrieve vertex on A trans into B's space
                    v-tmp (add (mmul42 a-rot-mat (nth points idx))
                                      a-pos)
                    v-tmp (mmul42 b-rot-mat-trans (sub v-tmp b-pos))
                    n-depth (dot norm (sub sup-point v-tmp))]
                (if (> n-depth depth)
                  [idx n-depth]
                  [best-axis depth])))
            [nil neg-infinity]
            (range (count points)))))


(defn find-incident-face [a b ref-idx]
  (let [a-norms (p/normals a)
        b-norms (p/normals b)
        a-rot-mat (p/rotation-matrix a)
        b-rot-mat (p/rotation-matrix b)
        b-points (p/rel-points b)
        b-pos (p/position b)
        ref-norm-tmp (nth a-norms ref-idx)
        ;;translate to frame of reference
        ref-norm (mmul42
                  (transpose b-rot-mat)
                  (mmul42 a-rot-mat ref-norm-tmp))
        [iface min-dot] (reduce (fn [[iface min-dot] idx]
                                  (let [dot (dot ref-norm
                                                        (nth b-norms idx))]
                                    (if (< dot min-dot)
                                      [idx dot]
                                      [iface min-dot])))
                                [0 infinity]
                                (range (count b-points)))
        v1 (add (mmul42 b-rot-mat (nth b-points iface)) b-pos)
        iface2 (mod (inc iface) (count b-points))
        v2 (add (mmul42 b-rot-mat (nth b-points iface2)) b-pos)]
    [v1 v2]))


(defn clip [norm c face]
  (let [[v1 v2] face
        ;;distance from points to line
        ;; d = ax + by -c
        d1 (- (dot norm v1) c)
        d2 (- (dot norm v2) c)
        [o1 o2] [(if (and (> d1 0.0)
                          (<= d2 0.0))
                   v2 v1) v2]
        o2 (if (< (* d1 d2) 0.0)
             (let [alpha (/ d1 (- d1 d2))]
               (add v1 (mul-vr (sub v2 v1) alpha)))
             o2)]
    [(cond-> 0
       (<= d1 0.0) inc
       (<= d2 0.0) inc
       (< (* d1 d2) 0.0) inc)
     [o1 o2]]))



(defn poly->poly [orig-a orig-b]
  (let [[a-idx depth-a] (find-axis-least-depth orig-a orig-b)]
    (when-not (>= depth-a 0.0)
      (let [[b-idx depth-b] (find-axis-least-depth orig-b orig-a)]
        (when-not (>= depth-b 0.0)
          (let [[a b idx flip depth] (if (bias-greater-than depth-a depth-b)
                                       [orig-a orig-b a-idx false depth-a]
                                       [orig-b orig-a b-idx true depth-b])
                incident-face (find-incident-face a b idx)
                a-points (p/rel-points a)
                a-rot-mat (p/rotation-matrix a)
                a-pos (p/position a)
                v1-tmp (nth a-points idx)
                v2-tmp (nth a-points (mod (inc idx) (count a-points)))
                ;; trans verts into world space
                v1 (add (mmul42 a-rot-mat v1-tmp) a-pos)
                v2 (add (mmul42 a-rot-mat v2-tmp) a-pos)
                ;; side plane normal in world space
                [sx sy :as side-plane-norm] (normalize (sub v2 v1))
                ;; orthogonalize
                ref-face-norm [sy (* sx -1.0)]

                ref-c (dot ref-face-norm v1)
                neg-side (* -1.0 (dot side-plane-norm v1))
                pos-side (dot side-plane-norm v2)
                [sp incident-face] (clip (mul-vr side-plane-norm -1.0)
                                          neg-side
                                          incident-face)]
            (when (= sp 2) ;;floating point error if not 2
              (let [[sp incident-face] (clip side-plane-norm
                                              pos-side
                                              incident-face)]
                (when (= sp 2) ;;floating point error if not 2
                  (let [[ifn1 ifn2] incident-face
                        d-tmp (- (dot ref-face-norm ifn1) ref-c)
                        col-tmp (if (<= d-tmp 0.0)
                                  (map->Collision {:contacts [ifn1]
                                                   :depth (* -1.0 d-tmp)})
                                  (map->Collision {:depth 0}))
                        d-tmp (- (dot ref-face-norm ifn2) ref-c)
                        col-tmp (if (<= d-tmp 0.0)
                                  (-> col-tmp
                                      (update :contacts (fnil conj []) ifn2)
                                      (update :depth + (* -1.0 d-tmp)))
                                  col-tmp)]
                    (collision->
                     (-> col-tmp
                         (assoc :a orig-a :b orig-b)
                         (update :depth / (double (count (:contacts col-tmp))))
                         (assoc :normal (if flip
                                          (mul-vr ref-face-norm -1.0)
                                          ref-face-norm))))))))))))))


(defn collision [body1 body2]
  (when (or (p/active body1)
            (p/active body2))
    (cond
      (and (satisfies? p/ICircle body1)
           (satisfies? p/ICircle body2))
      (circle->circle body1 body2)

      (and (satisfies? p/ICircle body1)
           (satisfies? p/IPolygon body2))
      (circle->poly body1 body2)

      (and (satisfies? p/IPolygon body1)
           (satisfies? p/ICircle body2))
      (poly->circle body1 body2)

      (and (satisfies? p/IPolygon body1)
           (satisfies? p/IPolygon body2))
      (poly->poly body1 body2))))

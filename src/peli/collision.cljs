(ns peli.collision
  (:require [peli.geometry :as geo]
            [clojure.core.matrix :as matrix]))


(defrecord Collision [contacts depth normal a b])

(def rel-bias 0.95)
(def abs-bias 0.01)

(defn bias-greater-than [a b]
  (>= a (+ (* b rel-bias)
           (* a abs-bias))))

(defn dist-sqr
  ([p1 p2] (dist-sqr (matrix/sub p1 p2)))
  ([[x y]]
   (+ (* x x) (* y y))))

;; ---------------------------------------------------------------------
;; Circle to Circle Collision

(defn circle->circle [a b]
  (let [normal (matrix/sub (geo/position b) (geo/position a))
        dist-sqr (dist-sqr normal)
        total-r (+ (geo/radius a) (geo/radius b))]
    (when (< dist-sqr total-r)
      (let [dist (Math/sqrt dist-sqr)]
        (if (= 0.0 dist)
          (Collision. [(geo/position a)] (geo/radius a) [1 0] a b)
          (let [normal (matrix/div normal dist)
                contacs [(matrix/add (matrix/mmul normal (geo/radius a))
                                     (geo/position a))]]
            (Collision. contacts (- total-r dist) normal a b)))))))

;; ---------------------------------------------------------------------
;; Circle to Poly and Poly to Circle Collision

(defn circle->poly [a b]
  (let [;; Translate a into b's local space
        radius (geo/radius a)
        center (matrix/mmul (matrix/transpose (geo/rotation-matrix b))
                           (matrix/sub (geo/position a) (geo/position b)))
        points (geo/rel-points b)
        normals (geo/normals b)
        [n-idx sep] (reduce
                     (fn [[n-idx sep] idx]
                       (let [n-sep (matrix/dot (nth normals idx)
                                               (matrix/sub center
                                                           (nth points idx)))]
                         (cond
                           (> n-sep (geo/radius a)) ;; no collision
                           (reduced nil)

                           (> n-sep sep)
                           [idx n-sep]

                           :else
                           [n-idx sep])))
                            [0 js/Number.NEGATIVE_INFINITY]
                            (range (count points)))
        ;;get contact edge
        edge (when n-idx
               [(nth points n-idx) (nth points (mod (inc n-idx) (count points)))])]
    ;; Is center in the polygon
    (when n-idx
      (if (< sep 0.0001)
        (let [normal (matrix/mmul (geo/rotation-matrix b) (nth normals n-idx))]
          (Collision. [(matrix/add (matrix/mmul normal radius)
                                   (geo/position a))]
                      radius
                      normal
                      a
                      b))
        ;;find correct voronoi region
        (let [[v1 v2] edge
              dot1 (matrix/dot (matrix/sub center v1) (matrix/sub v2 v1))
              dot2 (matrix/dot (matrix/sub center v2) (matrix/sub v1 v2))
              depth (- radius sep)]
          (cond
            ;;closer to v1
            (<= dot1 0.0)
            (when (<= (dist-sqr center v1)
                      (* radius radius))
              (let [normal (matrix/normalise
                            (matrix/mmul (geo/rotation-matrix b)
                                         (matrix/sub v1 center)))
                    contact (matrix/add (matrix/mmul (geo/rotation-matrix b) v1)
                                        (geo/position b))]
                (Collision. [contact] depth normal a b)))

            ;;closer to v2
            (<= dot2 0.0)
            (when (<= (dist-sqr center v2)
                      (* radius radius))
              (let [normal (matrix/normalise
                            (matrix/mmul (geo/rotation-matrix b)
                                         (matrix/sub v2 center)))
                    contact (matrix/add (matrix/mmul (geo/rotation-matrix b) v2)
                                        (geo/position b))]
                (Collision. [contact] depth normal a b)))

            ;;closest to face
            :else
            (let [normal (matrix/mmul (matrix/mmul (geo/rotation-matrix b)
                                                   (nth normals n-idx))
                                      -1.0)
                  contact (matrix/add (matrix/mmul normal radius)
                                      (geo/position a))]
              (Collision. [contact] depth normal a b))))))))


(defn poly->circle [body1 body2]
  (when-let [collision (circle->poly body2 body1)]
    (-> (update collision :normal matrix/mmul -1.0)
        (assoc :a (:b collsion))
        (assoc :b (:a collision)))))

;; ---------------------------------------------------------------------
;; Poly to Poly Collision

(defn get-support [body dir]
  (first
   (reduce (fn [[best-point best-proj] point]
             (let [proj (matrix/dot point dir)]
               (if (> proj best-proj)
                 [point proj]
                 [best-point best-proj])))
           [nil js/Number.NEGATIVE_INFINITY]
           (geo/rel-points body))))


(defn find-axis-least-depth [a b]
  (let [normals (geo/normals a)
        points (geo/rel-points a)
        a-rot-mat (geo/rotation-matrix a)
        b-rot-mat (geo/rotation-matrix b)
        b-pos (geo/position b)
        a-pos (geo/position a)
        b-rot-mat-trans (matrix/transpose b-rot-mat)]
    (reduce (fn [[best-axis depth] idx]
              (let [;; retrieve face normal from A
                    n-tmp (nth normals idx)
                    nw (matrix/mmul a-rot-mat n-tmp)
                    ;;transform faces normal to B's local space
                    norm (matrix/mmul b-rot-mat-trans nw)
                    ;;retrieve support point
                    sup-point (get-support b (matrix/mul norm -1.0))
                    ;;retrieve vertex on A trans into B's space
                    v-tmp (matrix/add (matrix/mmul a-rot-mat (nth points idx))
                                      a-pos)
                    v-tmp (matrix/mmul b-rot-mat-trans (matrix/sub v-tmp b-pos))
                    n-depth (matrix/dot norm, (matrix/sub sup-point v-tmp))]
                (if (> n-depth depth)
                  [idx n-depth]
                  [best-axis depth])))
            [nil js/Number.NEGATIVE_INFINITY]
            (range (count points)))))


(defn find-incident-face [a b ref-idx]
  (let [a-norms (geo/normals a)
        b-norms (geo/normals b)
        a-rot-mat (geo/rotation-matrix a)
        b-rot-mat (geo/rotation-matrix b)
        b-points (geo/rel-points b)
        b-pos (geo/position b)
        ref-norm-tmp (nth a-norms ref-idx)
        ;;translate to frame of reference
        ref-norm (matrix/mmul
                  (matrix/transpose (geo/rotation-matrix b))
                  (matrix/mmul a-rot-mat ref-norm-tmp))
        [iface min-dot] (reduce (fn [[iface min-dot] idx]
                                  (let [dot (matrix/dot ref-norm
                                                        (nth b-norms idx))]
                                    (if (< dot min-dot)
                                      [idx dot]
                                      [iface min-dot])))
                                [0 js/Number.POSITIVE_INFINITY]
                                (range (count b-points)))
        v1 (matrix/add (matrix/mmul b-rot-mat (nth b-points iface)) b-pos)
        iface2 (mod (inc iface) (count b-points))
        v2 (matrix/add (matrix/mmul b-rot-mat (nth b-points iface2)) b-pos)]
    [v1 v2]))


(defn clip [norm c face]
  (let [[v1 v2] face
        ;;distance from points to line
        ;; d = ax + by -c
        d1 (- (matrix/dot norm v1) c)
        d2 (- (matrix/dot norm v2) c)
        [o1 o2] [(if (and (> d1 0.0)
                          (<= d2 0.0))
                   v2 v1) v2]
        o2 (if (< (* d1 d2) 0.0)
             (let [alpha (/ d1 (- d1 d2))]
               (matrix/add v1 (matrix/mul (matrix/sub v2 v1)
                                          alpha)))
             o2)]
    (println :CLIP [d1 d2])
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
                                 [a b a-idx false depth-a]
                                 [b a b-idx true depth-b])
                incident-face (find-incident-face a b idx)
                a-points (geo/rel-points a)
                a-rot-mat (geo/rotation-matrix a)
                a-pos (geo/position a)
                v1-tmp (nth a-points idx)
                v2-tmp (nth a-points (mod (inc idx) (count a-points)))
                ;; trans verts into world space
                v1 (matrix/add (matrix/mmul a-rot-mat v1-tmp) a-pos)
                v2 (matrix/add (matrix/mmul a-rot-mat v2-tmp) a-pos)
                ;; side plane normal in world space
                [sx sy :as side-plane-norm] (matrix/normalise (matrix/sub v2 v1))
                ;; orthogonalize
                ref-face-norm [sy (* sx -1.0)]

                ref-c (matrix/dot ref-face-norm v1)
                neg-side (* -1.0 (matrix/dot side-plane-norm v1))
                pos-side (matrix/dot side-plane-norm v2)
                [sp incident-face] (clip (matrix/mmul side-plane-norm -1.0)
                                          neg-side
                                          incident-face)]
            (when (= sp 2) ;;floating point error if not 2
              (let [[sp incident-face] (clip side-plane-norm
                                              pos-side
                                              incident-face)]
                (println :SP2 sp)
                (when (= sp 2) ;;floating point error if not 2
                  (let [[ifn1 ifn2] incident-face
                        d-tmp (- (matrix/dot ref-face-norm ifn1) ref-c)
                        col-tmp (if (<= d-tmp 0.0)
                                  (map->Collision {:contacts [ifn1]
                                                   :depth (* -1.0 d-tmp)})
                                  (map->Collision {:depth 0}))
                        d-tmp (- (matrix/dot ref-face-norm ifn2) ref-c)
                        col-tmp (if (<= d-tmp 0.0)
                                  (-> col-tmp
                                      (update :contacts (fnil conj []) ifn2)
                                      (update :depth + (* -1.0 d-tmp)))
                                  col-tmp)]
                    (-> col-tmp
                        (assoc :a orig-a :b orig-b)
                        (update :depth / (double (count (:contacts col-tmp))))
                        (assoc :normal (if flip
                                         (matrix/mul ref-face-norm -1.0)
                                         ref-face-norm)))))))))))))


(defn collision [body1 body2]
  (cond
    (and (instance? geo/Circle body1)
         (instance? geo/Circle body2))
    (circle->circle body1 body2)

    (and (instance? geo/Circle body1)
         (instance? geo/ConvexPolygon body2))
    (circle->poly body1 body2)

    (and (instance? geo/ConvexPolygon body1)
         (instance? geo/Circle body2))
    (poly->circle body1 body2)

    (and (instance? geo/ConvexPolygon body1)
         (instance? geo/ConvexPolygon body2))
    (poly->poly body1 body2)))

(ns peli.impl.geometry
  (:require [peli.protocols :as p]
            [peli.impl.utils :as utils]
            [peli.impl.phy-math :refer [add sub cross-vv mul-vr
                                        mmul42 normalize infinity
                                        dist-sqr]]))

;; ---------------------------------------------------------------------
;; Helper Functions

(defn- create-points [body]
  (mapv #(add (mmul42 (p/rotation-matrix body) %)
              (p/position body))
        (p/rel-points body)))


(defn- invert-mm [mass-or-moment]
  (if (or (nil? mass-or-moment)
          (= infinity mass-or-moment))
    0.0
    (/ 1.0 mass-or-moment)))

(defn- rotation->matrix [rotation]
  (let [sin (Math/sin rotation)
        cos (Math/cos rotation)]
    [[cos (* sin -1.0)] [sin cos]]))


(defn- find-perp-norm [[x y]]
  (normalize [(* y -1.0) x]))

(defn- find-normals [[p1 :as points]]
  (let [full-points (conj points p1)]
    (first
     (reduce (fn [[axes prev-point] point]
               (let [a (-> (sub prev-point point)
                           find-perp-norm)]
                 [(conj axes a)
                  point]))
             [[] p1]
             (rest full-points)))))

(defn- compute-mass-circle* [body density]
  (let [r (p/radius body)
        m (* Math/PI r r density)]
    (-> body
        (p/mass m)
        (p/moment-i (* m r r)))))

(defn- compute-mass-circle [body density]
  (if (or (nil? density)
          (= infinity density))
    (-> body (p/mass density) (p/moment-i density))
    (compute-mass-circle* body density)))


(defn- compute-mass-poly* [body density]
  (let [points (p/rel-points body)
        k-inv3 (/ 1.0 3.0)
        cai (reduce
             (fn [[c a im] idx]
               (let [[x1 y1 :as p1] (nth points idx)
                     [x2 y2 :as p2] (nth points (mod (inc idx) (count points)))
                     d (cross-vv p1 p2)
                     tri-area (* 0.5 d)
                     int-x2 (+ (* x1 x1) (* x1 x2) (* x2 x2))
                     int-y2 (+ (* y1 y1) (* y1 y2) (* y2 y2))]
                 [(add c (mul-vr (mul-vr (add p1 p2) k-inv3) tri-area))
                  (+ a tri-area)
                  (+ im (* 0.25 k-inv3 d (+ int-x2 int-y2)))]))
             [[0.0 0.0] 0.0 0.0]
             (range (count points)))
        [c area im] cai
        centroid (mul-vr c (/ 1.0 area))]
    (-> body
        (p/rel-points (mapv #(sub % centroid) points))
        (p/mass (* density area))
        (p/moment-i (* im density)))))

(defn compute-mass-poly [body density]
  (if (or (nil? density)
          (= infinity density))
    (-> body (p/mass density) (p/moment-i density))
    (compute-mass-poly* body density)))

;; ---------------------------------------------------------------------
;; Records

(defrecord Circle [id
                   position
                   prev-position
                   rotation
                   linear-velocity
                   angular-velocity
                   mass
                   inv-mass
                   moment-i
                   inv-moment-i
                   radius
                   restitution
                   static-friction
                   dynamic-friction
                   active]
  p/IIdentity
  (id [this] (:id this))

  p/IActive
  (active [this] (:active this))
  (active [this val] (assoc this :active val))

  p/IBody
  (draw [this game]
    [:circle {:position (utils/framed-position game (p/position this))
              :radius (p/radius this)
              :rotation (p/rotation this)}])
  (shape [this] this)
  (shape [this val] val)

  p/ICircle
  (radius [this] (:radius this))

  p/IBounds
  (bounds [this]
    (let [[x y] (:position this)
          r (:radius this)]
      [[(- x r) (- y r)]
       [(+ x r) (+ y r)]]))

  p/IStatic
  (static? [this]
    (utils/is-static? this))

  p/IShape
  (rotate [this radians] (update this :rotation + radians))
  (rotation [this] (:rotation this))
  (rotation [this val] (assoc this :rotation val))
  (prev-rotation [this] (:prev-rotation this))
  (prev-rotation [this val] (assoc this :prev-rotation val))
  (translate [this [xt yt]]
    (update this :position (fn [[x y]] [(+ x xt) (+ y yt)])))
  (position [this] (:position this))
  (position [this val] (assoc this :position val))
  (prev-position [this] (:prev-position this))
  (prev-position [this val] (assoc this :prev-position val))

  (inv-mass [this] (:inv-mass this))
  (mass [this val] (assoc this
                          :inv-mass (invert-mm val)
                          :mass val))
  (inv-moment-i [this] (:inv-moment-i this))
  (moment-i [this] (:moment-i this))
  (moment-i [this val] (assoc this
                              :inv-moment-i (invert-mm val)
                              :moment-i val))
  (linear-velocity [this] (:linear-velocity this))
  (linear-velocity [this val] (assoc this :linear-velocity val))
  (angular-velocity [this] (:angular-velocity this))
  (angular-velocity [this val] (assoc this :angular-velocity val))
  (restitution [this] (:restitution this))
  (restitution [this val] (assoc this :restitution val))
  (static-friction [this] (:static-friction this))
  (static-friction [this val] (assoc this :static-friction val))
  (dynamic-friction [this] (:dynamic-friction this))
  (dynamic-friction [this val] (assoc this :dynamic-friction val)))



(defrecord ConvexPolygon [id
                          position
                          prev-position
                          rotation
                          linear-velocity
                          angular-velocity
                          mass
                          inv-mass
                          moment-i
                          inv-moment-i
                          rel-points
                          normals
                          rotation-matrix
                          restitution
                          static-friction
                          dynamic-friction
                          active]
  p/IIdentity
  (id [this] (:id this))

  p/IActive
  (active [this] (:active this))
  (active [this val] (assoc this :active val))

  p/IBody
  (draw [this game]
    [:poly {:position (utils/framed-position game (p/position this))
            :points (p/rel-points this)
            :rotation (p/rotation this)}])
  (shape [this] this)
  (shape [this val] val)

  p/IPolygon
  (rel-points [this] (:rel-points this))
  (rel-points [this val] (assoc this :rel-points val))
  (points [this] (create-points this))
  (rotation-matrix [this] (:rotation-matrix this))
  (normals [this] (:normals this))

  p/IBounds
  (bounds [this]
    (let [[p1 & r-points] (create-points this)]
      (reduce (fn [[[min-x min-y] [max-x max-y]] [x y]]
                [[(min min-x x)
                  (min min-y y)]
                 [(max max-x x)
                  (max max-y y)]])
              [p1 p1]
              r-points)))

  p/IStatic
  (static? [this]
    (utils/is-static? this))

  p/IShape
  (rotate [this radians]
    (let [new-rot (+ (:rotation this 0.0) radians)]
      (assoc this
             :rotation new-rot
             :rotation-matrix (rotation->matrix new-rot))))
  (rotation [this] (:rotation this))
  (rotation [this val] (assoc this :rotation val))
  (prev-rotation [this] (:prev-rotation this))
  (prev-rotation [this val] (assoc this :prev-rotation val))
  (translate [this [xt yt]]
    (update this :position (fn [[x y]] [(+ x xt) (+ y yt)])))
  (position [this] (:position this))
  (position [this val] (assoc this :position val))
  (prev-position [this] (:prev-position this))
  (prev-position [this val] (assoc this :prev-position val))

  (inv-mass [this] (:inv-mass this))
  (mass [this val]  (assoc this
                           :inv-mass (invert-mm val)
                           :mass val))
  (inv-moment-i [this] (:inv-moment-i this))
  (moment-i [this] (:moment-i this))
  (moment-i [this val] (assoc this
                              :inv-moment-i (invert-mm val)
                              :moment-i val))
  (linear-velocity [this] (:linear-velocity this))
  (linear-velocity [this val] (assoc this :linear-velocity val))
  (angular-velocity [this] (:angular-velocity this))
  (angular-velocity [this val] (assoc this :angular-velocity val))
  (restitution [this] (:restitution this))
  (restitution [this val] (assoc this :restitution val))
  (static-friction [this] (:static-friction this))
  (static-friction [this val] (assoc this :static-friction val))
  (dynamic-friction [this] (:dynamic-friction this))
  (dynamic-friction [this val] (assoc this :dynamic-friction val)))


;; ---------------------------------------------------------------------
;; Public Helper Functions


(defn bounds-overlap? [a b]
  (let [[[ax1 ay1] [ax2 ay2]] (p/bounds a)
        [[bx1 by1] [bx2 by2]] (p/bounds b)]
    (not (or (> ax1 bx2)
             (< ax2 bx1)
             (> ay1 by2)
             (< ay2 by1)))))

(defn contains-point [shape [x y :as  point]]
  (cond
    (satisfies? p/ICircle shape)
    (<= (dist-sqr (p/position shape) point)
        (* (p/radius shape) (p/radius shape)))

    (satisfies? p/IPolygon shape)
    (let [points (p/points shape)]
      (reduce (fn [inside edge-idx]
                (let [[xi yi] (get points edge-idx)
                      [xj yj] (get points (mod (inc edge-idx) (count points)))
                      intersect (and (not= (> yi y) (> yj y))
                                     (< x  (+ (/ (* (- xj xi) (- y yi))
                                                 (- yj yi))
                                              xi)))]
                  (if intersect
                    (not inside)
                    inside)))
              false
              (range (count points))))))

(defn create-circle [{:keys [id
                             position
                             radius
                             density
                             restitution
                             static-friction
                             dynamic-friction
                             rotation
                             linear-velocity
                             angular-velocity]
                      :or {id (utils/gen-id "circle")
                           rotation 0.0
                           linear-velocity [0.0 0.0]
                           angular-velocity 0.0
                           restitution 0.2
                           dynamic-friction 0.1
                           static-friction 0.5}}]
  (-> (map->Circle {:id id
                    :position position
                    :prev-position position
                    :rotation rotation
                    :radius radius
                    :linear-velocity linear-velocity
                    :angular-velocity angular-velocity
                    :static-friction static-friction
                    :dynamic-friction dynamic-friction
                    :restitution restitution
                    :active true})
      (compute-mass-circle density)))


(defn create-poly [{:keys [id
                           position
                           points
                           density
                           restitution
                           static-friction
                           dynamic-friction
                           rotation
                           linear-velocity
                           angular-velocity]
                    :or {id (utils/gen-id "box")
                         density infinity
                         rotation 0.0
                         linear-velocity [0.0 0.0]
                         angular-velocity 0.0
                         restitution 0.2
                         dynamic-friction 0.2
                         static-friction 0.8}}]
  (let [normals (find-normals points)]
    (-> (map->ConvexPolygon {:id id
                             :position position
                             :prev-position position
                             :rotation rotation
                             :rotation-matrix (rotation->matrix 0.0)
                             :linear-velocity linear-velocity
                             :angular-velocity angular-velocity
                             :rel-points points
                             :normals normals
                             :static-friction static-friction
                             :dynamic-friction dynamic-friction
                             :restitution restitution
                             :active true})
        (compute-mass-poly density))))


(defn create-box [{:keys [id width height]
                   :or {id (utils/gen-id "box")}
                   :as opts}]
  (let [points [[(* -1.0 (/ width 2.0))
                 (* -1.0 (/ height 2.0))]
                [(/ width 2.0)
                 (* -1.0 (/ height 2.0))]
                [(/ width 2.0)
                 (/ height 2.0)]
                [(* -1.0 (/ width 2.0))
                 (/ height 2.0)]]]
    (create-poly (assoc opts
                        :points points
                        :id id))))

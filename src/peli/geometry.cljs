(ns peli.geometry
  (:require [clojure.core.matrix :as matrix]))

;; ---------------------------------------------------------------------
;; Protocols
(defprotocol IBody
  (id [this]))

(defprotocol IPolygon
  (rel-points [this])
  (points [this])
  (rotation-matrix [this])
  (normals [this]))

(defprotocol ICircle
  (radius [this]))

(defprotocol IRotate
  (rotate [this radians])
  (rotation [this]))

(defprotocol IPosition
  (translate [this [x y]])
  (position [this] [this [x y]])
  (bounds [this]))

(defprotocol IMass
  (mass [this] [this val])
  (inv-mass [this]))

(defprotocol IMoment
  (moment-i [this] [this val])
  (inv-moment-i [this]))

(defprotocol ILinearMovement
  (linear-velocity [this] [this val]))

(defprotocol IAngularMovement
  (angular-velocity [this] [this val]))

(defprotocol ISurface
  (restitution [this] [this val])
  (static-friction [this] [this val])
  (dynamic-friction [this] [this val]))

;; ---------------------------------------------------------------------
;; Internal Helper Functions

(defn- create-points [body]
  (mapv #(matrix/add (matrix/mmul (rotation-matrix body) %)
                     (position body))
        (rel-points body)))


(defn- invert-mm [mass-or-moment]
  (println "INVERT_MM:" mass-or-moment)
  (if (or (nil? mass-or-moment)
          (= js/Number.POSITIVE_INFINITY mass-or-moment))
    0
    (/ 1.0 mass-or-moment)))

(defn- rotation->matrix [rotation]
  (let [sin (Math/sin rotation)
        cos (Math/cos rotation)]
    [[cos (* sin -1.0)] [sin cos]]))


(defn- find-perp-norm [[x y]]
  (matrix/normalise [(* y -1.0) x]))

(defn- find-normals [[p1 :as points]]
  (let [full-points (conj points p1)]
    (first
     (reduce (fn [[axes prev-point] point]
               (let [a (-> (matrix/sub prev-point point)
                           find-perp-norm)]
                 [(conj axes a)
                  point]))
             [[] p1]
             (rest full-points)))))

;; ---------------------------------------------------------------------
;; Records

(defrecord Circle [id
                   position
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
                   dynamic-friction]
  IBody
  (id [this] (:id this))

  IRotate
  (rotate [this radians] (update this :rotation + radians))
  (rotation [this] (:rotation this))


  IPosition
  (translate [this [xt yt]]
    (update this :position (fn [[x y]] [(+ x xt) (+ y yt)])))
  (position [this] (:position this))
  (position [this val] (assoc this :position val))
  (bounds [this] (let [[x y] (:position this)
                       r (:radius this)]
                   [[(- x r) (- y r)]
                    [(+ x r) (+ y r)]]))

  IMass
  (inv-mass [this] (:inv-mass this))
  (mass [this val] (assoc this
                          :inv-mass (invert-mm val)
                          :mass val))

  IMoment
  (inv-moment-i [this] (:inv-moment-i this))
  (moment-i [this] (:moment-i this))
  (moment-i [this val] (assoc this
                              :inv-moment-i (invert-mm val)
                              :moment-i val))

  ILinearMovement
  (linear-velocity [this] (:linear-velocity this))
  (linear-velocity [this val] (assoc this :linear-velocity val))

  IAngularMovement
  (angular-velocity [this] (:angular-velocity this))
  (angular-velocity [this val] (assoc this :angular-velocity val))

  ICircle
  (radius [this] (:radius this))

  ISurface
  (restitution [this] (:restitution this))
  (restitution [this val] (assoc this :restitution val))
  (static-friction [this] (:static-friction this))
  (static-friction [this val] (assoc this :static-friction val))
  (dynamic-friction [this] (:dynamic-friction this))
  (dynamic-friction [this val] (assoc this :dynamic-friction val)))



(defrecord ConvexPolygon [id
                          position
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
                          dynamic-friction]
  IBody
  (id [this] (:id this))

  IRotate
  (rotate [this radians]
    (let [new-rot (+ (:rotation this 0.0) radians)]
      (assoc this
             :rotation new-rot
             :rotation-matrix (rotation->matrix new-rot))))
  (rotation [this] (:rotation this))

  IPosition
  (translate [this [xt yt]]
    (update this :position (fn [[x y]] [(+ x xt) (+ y yt)])))
  (position [this] (:position this))
  (position [this val] (assoc this :position val))
  (bounds [this] (let [[p1 & r-points] (create-points this)]
                   (reduce (fn [[[min-x min-y] [max-x max-y]] [x y]]
                             [[(min min-x x)
                               (min min-y y)]
                              [(max max-x x)
                               (max max-y y)]])
                           [p1 p1]
                           r-points)))

  IMass
  (inv-mass [this] (:inv-mass this))
  (mass [this val]  (assoc this
                           :inv-mass (invert-mm val)
                           :mass val))

  IMoment
  (inv-moment-i [this] (:inv-moment-i this))
  (moment-i [this] (:moment-i this))
  (moment-i [this val] (assoc this
                              :inv-moment-i (invert-mm val)
                              :moment-i val))

  ILinearMovement
  (linear-velocity [this] (:linear-velocity this))
  (linear-velocity [this val] (assoc this :linear-velocity val))

  IAngularMovement
  (angular-velocity [this] (:angular-velocity this))
  (angular-velocity [this val] (assoc this :angular-velocity val))

  IPolygon
  (rel-points [this] (:rel-points this))
  (points [this] (create-points this))
  (rotation-matrix [this] (:rotation-matrix this))
  (normals [this] (:normals this))

   ISurface
  (restitution [this] (:restitution this))
  (restitution [this val] (assoc this :restitution val))
  (static-friction [this] (:static-friction this))
  (static-friction [this val] (assoc this :static-friction val))
  (dynamic-friction [this] (:dynamic-friction this))
  (dynamic-friction [this val] (assoc this :dynamic-friction val)))


;; ---------------------------------------------------------------------
;; Public Helper Functions

(defn bounds-overlap? [a b]
  (let [[[ax1 ay1] [ax2 ay2]] (bounds a)
        [[bx1 by1] [bx2 by2]] (bounds b)]
    (not (or (> ax1 bx2)
             (< ax2 bx1)
             (> ay1 by2)
             (< ay2 by1)))))


(defn create-circle [{:keys [id
                             position
                             radius
                             restitution
                             static-friction
                             dynamic-friction
                             rotation
                             linear-velocity
                             angular-velocity]
                      m :mass
                      :or {rotation 0.0
                           linear-velocity [0.0 0.0]
                           angular-velocity 0.0
                           restitution 0.2
                           dynamic-friction 0.3
                           static-friction 0.5}}]
  (-> (map->Circle {:id id
                    :position position
                    :rotation rotation
                    :radius radius
                    :linear-velocity linear-velocity
                    :angular-velocity angular-velocity
                    :static-friction static-friction
                    :dynamic-friction dynamic-friction
                    :restitution restitution})
      (mass m)
      (moment-i (/ (* m (* radius radius)) 4.0))))



(defn create-box [{:keys [id
                          position
                          width
                          height
                          restitution
                          static-friction
                          dynamic-friction
                          rotation
                          linear-velocity
                          angular-velocity]
                   m :mass
                   :or {rotation 0.0
                        linear-velocity [0.0 0.0]
                        angular-velocity 0.0
                        restitution 0.2
                        dynamic-friction 0.3
                        static-friction 0.5}}]
  (let [points [[(* -1.0 (/ width 2.0))
                 (* -1.0 (/ height 2.0))]
                [(/ width 2.0)
                 (* -1.0 (/ height 2.0))]
                [(/ width 2.0)
                 (/ height 2.0)]
                [(* -1.0 (/ width 2.0))
                 (/ height 2.0)]]
        normals (find-normals points)]
    (-> (map->ConvexPolygon {:id id
                             :position position
                             :rotation rotation
                             :rotation-matrix (rotation->matrix 0.0)
                             :linear-velocity linear-velocity
                             :angular-velocity angular-velocity
                             :rel-points points
                             :normals normals
                             :static-friction static-friction
                             :dynamic-friction dynamic-friction
                             :restitution restitution})
        (mass m)
        (moment-i (when m
                    (/ (* m (+ (* width width)
                               (* height height))) 12.0))))))

(ns peli.physics
  (:require [clojure.core.matrix :as matrix]
            [peli.geometry :as geo]))

;; ---------------------------------------------------------------------
;; Helper Function

(defn- break-force-up [position point force]
  (println "bfu:" position point force)
  (let [[rx ry :as r-vec] (matrix/sub position point)
        _ (println :r-vec r-vec)
        r-unit (matrix/normalise r-vec)
        _ (println :r-unit r-unit (matrix/dot force r-unit))
        linear-proj (matrix/mul r-unit (matrix/dot force r-unit))
        _ (println :linear-proj linear-proj )
        ang-proj (matrix/sub force linear-proj)]
    [linear-proj ang-proj]))

;; ---------------------------------------------------------------------
;; Force Functions

(def gravity-scale 5.0)
(def default-gravity [0 (* 10.0 gravity-scale)])
(def default-dt (/ 60.0 1000.0))

(defn apply-angular-force [body [[force point] & force-pairs] dt]
  (if (and force point)
    (let [[fx fy] force
          [rx ry] (matrix/sub (geo/position body) point)
          torque (- (* ry fx) (* rx fy))
          accel (* torque (geo/inv-moment-i body))
          cur-vel (geo/angular-velocity body)]
      (println "ANG:" [rx ry] torque accel cur-vel)
      (geo/angular-velocity body (+ cur-vel (* accel dt))))))


(defn apply-linear-force [body force dt]
  (let [linear-accel (matrix/mul force (geo/inv-mass body))]
    (println "LIN_ACCEL:" linear-accel)
    (geo/linear-velocity body (matrix/add (geo/linear-velocity body)
                                          (matrix/mul linear-accel dt)))))


(defn apply-force [body force points dt]
  (if-not (and (zero? (geo/inv-mass body))
               (zero? (geo/inv-moment-i body)))
    (let [partial-force (matrix/div force (count points))
          forces (reduce (fn [[linear angular] point]
                           (let [[l a] (break-force-up (geo/position body)
                                                       point
                                                       partial-force)]
                             (println "L_A:" l a)
                             [(matrix/add linear l)
                              (conj angular [a point])]))
                         [0 []]
                         points)
          [linear angular-force-pairs] forces]
      (println "FORCES:" forces (not= 0.0 (geo/inv-moment-i body)))
      (cond-> body
        (not= 0.0 (geo/inv-mass body))
        (apply-linear-force linear dt)

        (not= 0.0 (geo/inv-moment-i body))
        (apply-angular-force angular-force-pairs dt)))
    body))


(defn apply-physics [body dt]
  (let [[x y] (geo/position body)
        [lx ly] (geo/linear-velocity body)
        av (geo/angular-velocity body)
        r (geo/rotation body)]
    (-> body
        (geo/translate [(* lx dt) (* ly dt)])
        (geo/rotate (* av dt)))))


(defn cross-rv [r [x y]]
  [(* r x) (* -1.0 r y)])

(defn cross-vr [[x y] r]
  [(* -1.0 r x) (* r y)])

(defn cross-vv [[x1 y1] [x2 y2]]
  (- (* x1 y2) (* x2 y1)))

(defn apply-impulse [body impulse contact-vec]
  (println "AI:" body impulse contact-vec)
  (-> body
      (geo/linear-velocity
       (matrix/add (geo/linear-velocity body)
                   (matrix/mmul (geo/inv-mass body)
                                impulse)))
      (geo/angular-velocity
       (matrix/add (geo/angular-velocity body)
                   (matrix/mmul (geo/inv-moment-i body)
                                (cross-vv contact-vec impulse))))))

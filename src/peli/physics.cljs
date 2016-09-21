(ns peli.physics
  (:require [clojure.core.matrix :as matrix]
            [peli.geometry :as geo]))

;; ---------------------------------------------------------------------
;; Helper Function

(defn- break-force-up [position point force]
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

(def gravity-scale 30.0)
(def default-gravity [0 (* 10.0 gravity-scale)])
(def default-dt (/ 1.0 60.0))

(defn apply-angular-force [body [[force point] & force-pairs] dt]
  (if (and force point)
    (let [[fx fy] force
          [rx ry] (matrix/sub (geo/position body) point)
          torque (- (* ry fx) (* rx fy))
          accel (* torque (geo/inv-moment-i body))
          cur-vel (geo/angular-velocity body)]
      (geo/angular-velocity body (+ cur-vel (* accel dt))))))


(defn apply-linear-force [body force dt]
  (let [linear-accel (matrix/mul force (geo/inv-mass body))]
    (geo/linear-velocity body (matrix/add (geo/linear-velocity body)
                                          (matrix/mul linear-accel dt)))))


(defn apply-force [body force points dt]
  (if-not (and (= (geo/inv-mass body) 0.0)
               (= (geo/inv-moment-i body) 0.0))
    (let [partial-force (matrix/div force (count points))
          forces (reduce (fn [[linear angular] point]
                           (let [[l a] (break-force-up (geo/position body)
                                                       point
                                                       partial-force)]
                             [(matrix/add linear l)
                              (conj angular [a point])]))
                         [0 []]
                         points)
          [linear angular-force-pairs] forces]
      (cond-> body
        (not= 0.0 (geo/inv-mass body))
        (apply-linear-force linear dt)

        (not= 0.0 (geo/inv-moment-i body))
        (apply-angular-force angular-force-pairs dt)))
    body))

(defn apply-gravity [body gravity dt]
  (if (and (= (geo/inv-mass body) 0.0)
           (= (geo/inv-moment-i body) 0.0))
    body
    (let [lv (geo/linear-velocity body)]
      (geo/linear-velocity body (matrix/add lv (matrix/mul gravity dt))))))

(defn apply-physics [body dt]
  (if (and (= (geo/inv-mass body) 0.0)
           (= (geo/inv-moment-i body) 0.0))
    body
    (let [[x y] (geo/position body)
          [lx ly] (geo/linear-velocity body)
          av (geo/angular-velocity body)
          r (geo/rotation body)]
      (-> body
          (geo/translate [(* lx dt) (* ly dt)])
          (geo/rotate (* av dt))))))


(defn cross-rv [r [x y]]
  [(* -1.0 r y) (* r x)])

(defn cross-vr [[x y] r]
  [(* r y) (* -1.0 r x)])

(defn cross-vv [[x1 y1] [x2 y2]]
  (- (* x1 y2) (* x2 y1)))

(defn apply-impulse [body impulse contact-vec]
  #_(println "AI:" body impulse contact-vec)
  (if (and (= (geo/inv-mass body) 0.0)
           (= (geo/inv-moment-i body) 0.0))
    body
    (-> body
        (geo/linear-velocity
         (matrix/add (geo/linear-velocity body)
                     (matrix/mmul (geo/inv-mass body)
                                  impulse)))
        (geo/angular-velocity
         (matrix/add (geo/angular-velocity body)
                     (* (geo/inv-moment-i body)
                        (cross-vv contact-vec impulse)))))))

(ns peli.physics
  (:require [clojure.core.matrix :as matrix]
            [peli.geometry :as geo]
            [peli.phy-math :refer [sub add dot cross-vr cross-rv
                                   cross-vv mul-vr dist-sqr =*
                                   normalize]]))

;; ---------------------------------------------------------------------
;; Helper Function

(defn- break-force-up [position point force]
  (let [[rx ry :as r-vec] (sub position point)
        r-unit (normalize r-vec)
        linear-proj (mul-vr r-unit (dot force r-unit))
        ang-proj (sub force linear-proj)]
    [linear-proj ang-proj]))

;; ---------------------------------------------------------------------
;; Force Functions

(def gravity-scale 40.0)
(def default-gravity [0 (* 10.0 gravity-scale)])
(def default-dt (/ 1.0 60.0))

(defn apply-angular-force [body [[force point] & force-pairs] dt]
  (if (and force point)
    (let [[fx fy] force
          [rx ry] (sub (geo/position body) point)
          torque (- (* ry fx) (* rx fy))
          accel (* torque (geo/inv-moment-i body))
          cur-vel (geo/angular-velocity body)]
      (geo/angular-velocity body (+ cur-vel (* accel dt))))))


(defn apply-linear-force [body force dt]
  (let [linear-accel (mul-vr force (geo/inv-mass body))]
    (geo/linear-velocity body (add (geo/linear-velocity body)
                                   (mul-vr linear-accel dt)))))


(defn apply-force [body [xf yf] points dt]
  (if-not (and (= (geo/inv-mass body) 0.0)
               (= (geo/inv-moment-i body) 0.0))
    (let [partial-force [(/ xf (double (count points)))
                         (/ yf (double (count points)))]
          forces (reduce (fn [[linear angular] point]
                           (let [[l a] (break-force-up (geo/position body)
                                                       point
                                                       partial-force)]
                             [(add linear l)
                              (conj angular [a point])]))
                         [[0 0] []]
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
      (geo/linear-velocity body (add lv (mul-vr gravity dt))))))

(defn apply-physics [body dt]
  (if (and (= (geo/inv-mass body) 0.0)
           (= (geo/inv-moment-i body) 0.0))
    body
    (let [pos (geo/position body)
          [lx ly] (geo/linear-velocity body)
          av (geo/angular-velocity body)
          r (geo/rotation body)]
      (-> body
          (geo/prev-position pos)
          (geo/prev-rotation r)
          (geo/translate [(* lx dt) (* ly dt)])
          (geo/rotate (* av dt))))))


(defn apply-impulse [body impulse contact-vec]
  #_(println "AI:" (:id body) impulse contact-vec)
  (let [res (-> body
                (geo/linear-velocity
                 (add (geo/linear-velocity body)
                      (mul-vr impulse (geo/inv-mass body))))
                (geo/angular-velocity
                 (+ (geo/angular-velocity body)
                    (* (geo/inv-moment-i body)
                       (cross-vv contact-vec impulse)))))]
    #_(println :AI (:id body)
             (geo/linear-velocity body)
             (geo/linear-velocity res)
             (geo/angular-velocity body)
             (geo/angular-velocity res))
    res))

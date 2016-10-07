(ns peli.impl.physics
  (:require [peli.protocols :as p]
            [peli.impl.phy-math :refer [sub add dot cross-vr cross-rv
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
(def default-dt (/ 1.0 80.0))

(defn apply-angular-force [body [[force point] & force-pairs] dt]
  (if (and force point)
    (let [[fx fy] force
          [rx ry] (sub (p/position body) point)
          torque (- (* ry fx) (* rx fy))
          accel (* torque (p/inv-moment-i body))
          cur-vel (p/angular-velocity body)]
      (p/angular-velocity body (+ cur-vel (* accel dt))))))


(defn apply-linear-force [body force dt]
  (let [linear-accel (mul-vr force (p/inv-mass body))]
    (p/linear-velocity body (add (p/linear-velocity body)
                                   (mul-vr linear-accel dt)))))


(defn apply-force [body [xf yf] points dt]
  (if-not (and (= (p/inv-mass body) 0.0)
               (= (p/inv-moment-i body) 0.0))
    (let [partial-force [(/ xf (double (count points)))
                         (/ yf (double (count points)))]
          forces (reduce (fn [[linear angular] point]
                           (let [[l a] (break-force-up (p/position body)
                                                       point
                                                       partial-force)]
                             [(add linear l)
                              (conj angular [a point])]))
                         [[0 0] []]
                         points)
          [linear angular-force-pairs] forces]
      (cond-> body
        (not= 0.0 (p/inv-mass body))
        (apply-linear-force linear dt)

        (not= 0.0 (p/inv-moment-i body))
        (apply-angular-force angular-force-pairs dt)))
    body))

(defn apply-gravity [body gravity dt]
  (if (or (not (p/active body))
          (and
           (= (p/inv-mass body) 0.0)
           (= (p/inv-moment-i body) 0.0)))
    body
    (let [lv (p/linear-velocity body)]
      (p/linear-velocity body (add lv (mul-vr gravity dt))))))

(defn apply-physics [body dt]
  (if (or (not (p/active body))
          (and
           (= (p/inv-mass body) 0.0)
           (= (p/inv-moment-i body) 0.0)))
    body
    (let [pos (p/position body)
          [lx ly] (p/linear-velocity body)
          av (p/angular-velocity body)
          r (p/rotation body)]
      (-> body
          (p/prev-position pos)
          (p/prev-rotation r)
          (p/translate [(* lx dt) (* ly dt)])
          (p/rotate (* av dt))))))


(defn apply-impulse [body impulse contact-vec]
  (-> body
      (p/linear-velocity
       (add (p/linear-velocity body)
            (mul-vr impulse (p/inv-mass body))))
      (p/angular-velocity
       (+ (p/angular-velocity body)
          (* (p/inv-moment-i body)
             (cross-vv contact-vec impulse))))))

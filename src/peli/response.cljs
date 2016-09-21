(ns peli.response
  (:require [peli.geometry :as geo]
            [peli.physics :as phy]
            [peli.collision :as coll]
            [clojure.core.matrix :as matrix]))

(defn =* [a b]
  (<=  (js/Math.abs (- a b)) 0.0001))


(defn gravity-check-fn [a b dt gravity]
  (fn [rest contact]
    (let [ra (matrix/sub contact (geo/position a))
          rb (matrix/sub contact (geo/position b))
          rv (matrix/sub
               (matrix/add (geo/linear-velocity b)
                           (phy/cross-rv (geo/angular-velocity b) rb))
               (geo/linear-velocity a)
               (phy/cross-rv (geo/angular-velocity a) ra))]
      (if (< (coll/dist-sqr rv) (+ (coll/dist-sqr (matrix/mul gravity dt)) 0.0001))
        0.0 ;;gravity is the only acting force
        rest))))


(defn add-collision-setup [dt gravity collision]
  (let [{:keys [a b]} collision
        restitution (min (geo/restitution a)
                         (geo/restitution b))
        static-friction (js/Math.sqrt (* (geo/static-friction a)
                                         (geo/static-friction b)))
        dynamic-friction (js/Math.sqrt (* (geo/dynamic-friction a)
                                          (geo/dynamic-friction b)))
        ;;no restitution if gravity the only thing acting on a resting object
        restitution (if gravity
                      (reduce (gravity-check-fn a b dt gravity)
                              restitution
                              (:contacts collision))
                      restitution)]
    (assoc collision
           :rest-c restitution
           :sf-c static-friction
           :df-c dynamic-friction)))


(defn infinit-mass-correction [collision]
  (-> collision
      (update :a geo/linear-velocity 0.0)
      (update :b geo/linear-velocity 0.0)
      (update :a geo/angular-velocity 0.0)
      (update :b geo/angular-velocity 0.0)))


(defn- sqr [val]
  (* val val))


(defn apply-impulse [collision]
  (let [{:keys [a b contacts normal depth rest-c sf-c df-c]} collision
        orig-a a
        orig-b b
        pos-a (geo/position a)
        pos-b (geo/position b)
        im-a (geo/inv-mass a)
        im-b (geo/inv-mass b)
        imi-a (geo/inv-moment-i a)
        imi-b (geo/inv-moment-i b)]
    (if (=* (+ (geo/inv-mass a)
               (geo/inv-mass b)) 0.0)
      (infinit-mass-correction collision)
      (reduce
       (fn [coll contact]
         (let [{:keys [a b]} coll
               ra (matrix/sub contact pos-a)
               rb (matrix/sub contact pos-b)
               rv (matrix/sub
                    (matrix/add
                     (geo/linear-velocity orig-b)
                     (phy/cross-rv (geo/angular-velocity orig-b) rb))
                    (geo/linear-velocity orig-a)
                    (phy/cross-rv (geo/angular-velocity orig-a) ra))
               contact-vel (matrix/dot rv normal)]
           (if (> contact-vel 0.0)
             collision
             (let [ra-cross-n (phy/cross-vv ra normal)
                   rb-cross-n (phy/cross-vv rb normal)
                   inv-mass-sum (+ im-a
                                   im-b
                                   (* (sqr ra-cross-n)
                                      imi-a)
                                   (* (sqr rb-cross-n)
                                      imi-b))
                   imp (/ (/ (* -1.0
                                  (+ 1.0 rest-c)
                                  contact-vel)
                               inv-mass-sum)
                            (double (count contacts)))
                   ;; Apply Impulse
                   impulse (matrix/mmul normal imp)

                   orig-a (phy/apply-impulse orig-a (matrix/mul impulse -1.0) ra)
                   orig-b (phy/apply-impulse orig-b impulse rb)
                   a (phy/apply-impulse a (matrix/mul impulse -1.0) ra)
                   b (phy/apply-impulse b impulse rb)
                   ;; Friction impulse
                   rv (matrix/sub
                        (matrix/add (geo/linear-velocity orig-b)
                                    (phy/cross-rv (geo/angular-velocity orig-b) rb))
                        (geo/linear-velocity orig-a)
                        (phy/cross-rv (geo/angular-velocity orig-a) ra))
                   t (matrix/normalise
                      (matrix/sub rv (matrix/mul normal
                                                 (matrix/dot rv normal))))
                   ;; Tangent magnitude
                   tan (/ (/ (* -1.0 (matrix/dot rv t))
                             inv-mass-sum)
                          (double (count contacts)))]
               (if (=* tan 0.0)
                 (assoc collision :a a :b b)
                 (let [tan-impulse (if (< (js/Math.abs tan)
                                          (* imp sf-c))
                                     (matrix/mul t tan)
                                     (matrix/mul t (* -1.0 imp df-c)))
                       a (phy/apply-impulse a (matrix/mul tan-impulse -1.0) ra)
                       b (phy/apply-impulse b tan-impulse rb)]
                   (assoc collision :a a :b b)))))))
       collision
       (:contacts collision)))))

(def k-slop 0.05)
(def percent 0.4)

(defn position-correction [collisions]
  (mapv (fn [collision]
          (let [{:keys [depth normal a b]} collision
                a-pos (geo/position a)
                b-pos (geo/position b)
                a-im (geo/inv-mass a)
                b-im (geo/inv-mass b)
                correction-v (matrix/mul
                              normal
                              (* percent (/ (max (- depth k-slop) 0.0)
                                            (+ a-im b-im))))
                a (geo/position a (matrix/sub a-pos (matrix/mul correction-v a-im)))
                b (geo/position b (matrix/add b-pos (matrix/mul correction-v b-im)))]
            (assoc collision :a a :b b)))
        collisions))


(defn collision-response [collisions dt gravity]
  (let [collisions (map (partial add-collision-setup dt gravity) collisions)
        bodies (reduce (fn [bodies iter]
                         (reduce (fn [bodies {:keys [a b] :as collision}]
                                   (let [a (get bodies (geo/id a) a)
                                         b (get bodies (geo/id b) b)
                                         collision (assoc collision :a a :b b)
                                         {:keys [a b]} (apply-impulse collision)]
                                     (assoc bodies
                                            (geo/id a) a
                                            (geo/id b) b)))
                                 {}
                                 collisions))
                       {}
                       (range 5))]
    (mapv (fn [{:keys [a b] :as col}]
            (assoc col
                   :a (get bodies (geo/id a))
                   :b (get bodies (geo/id b))))
          collisions)))

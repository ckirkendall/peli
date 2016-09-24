(ns peli.response
  (:require [peli.geometry :as geo]
            [peli.physics :as phy]
            [peli.collision :as coll]
            [clojure.core.matrix :as matrix]
            [peli.phy-math :refer [sub add dot cross-vr cross-rv
                                   cross-vv mul-vr dist-sqr =*
                                   transpose normalize clamp
                                   perp]]))


(defn gravity-check-fn [a b dt gravity]
  (fn [rest contact]
    (let [ra (sub contact (geo/position a))
          rb (sub contact (geo/position b))
          rv (sub (sub
                    (add (geo/linear-velocity b)
                                (cross-rv (geo/angular-velocity b) rb))
                    (geo/linear-velocity a))
               (cross-rv (geo/angular-velocity a) ra))]
      (if (< (dist-sqr rv) (+ (dist-sqr (mul-vr gravity dt)) 0.0001))
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
        imi-b (geo/inv-moment-i b)
        c-cnt (double (count contacts))]
    (if (=* (+ (geo/inv-mass a)
               (geo/inv-mass b)) 0.0)
      (infinit-mass-correction collision)
      (reduce
       (fn [coll contact]
         (let [{:keys [a b]} coll
               ra (sub contact pos-a)
               rb (sub contact pos-b)
               rv (sub (sub (add
                             (geo/linear-velocity orig-b)
                             (cross-rv (geo/angular-velocity orig-b) rb))
                         (geo/linear-velocity orig-a))
                    (cross-rv (geo/angular-velocity orig-a) ra))
               contact-vel (dot rv normal)]
           (if (> contact-vel 0.0)
             collision
             (let [ra-cross-n (cross-vv ra normal)
                   rb-cross-n (cross-vv rb normal)
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
                            c-cnt)
                   ;; Apply Impulse
                   impulse (mul-vr normal imp)

                   orig-a (phy/apply-impulse orig-a (mul-vr impulse -1.0) ra)
                   orig-b (phy/apply-impulse orig-b impulse rb)
                   a (phy/apply-impulse a (mul-vr impulse -1.0) ra)
                   b (phy/apply-impulse b impulse rb)
                   ;; Friction impulse
                   rv (sub (sub (add (geo/linear-velocity orig-b)
                                     (cross-rv (geo/angular-velocity orig-b) rb))
                             (geo/linear-velocity orig-a))
                        (cross-rv (geo/angular-velocity orig-a) ra))
                   t (normalize
                      (sub rv (mul-vr normal (dot rv normal))))
                   ;; Tangent magnitude
                   tan (/ (/ (* -1.0 (dot rv t))
                             inv-mass-sum)
                          c-cnt)]
               #_(println :TAN_RV tan t rv inv-mass-sum orig-a orig-b
                        (cross-rv (geo/angular-velocity orig-b) rb)
                        (cross-rv (geo/angular-velocity orig-a) ra)
                        (add (geo/linear-velocity orig-b)
                                     (cross-rv (geo/angular-velocity orig-b) rb))
                        (sub (add (geo/linear-velocity orig-b)
                                     (cross-rv (geo/angular-velocity orig-b) rb))
                             (geo/linear-velocity orig-a))
                        (sub rv (mul-vr normal (dot rv normal)))
                        (dot rv normal)
                        normal)
               (if (=* tan 0.0)
                 (assoc collision :a a :b b)
                 (let [tan-impulse (if (< (js/Math.abs tan)
                                          (* imp sf-c))
                                     (mul-vr t tan)
                                     (mul-vr t (* -1.0 imp df-c)))
                       a (phy/apply-impulse a (mul-vr tan-impulse -1.0) ra)
                       b (phy/apply-impulse b tan-impulse rb)]
                   (assoc collision :a a :b b)))))))
       collision
       (:contacts collision)))))

(def k-slop 0.05)
(def percent 0.4)

(defn position-correction-single [collision]
  (let [{:keys [depth normal a b]} collision
        a-pos (geo/position a)
        b-pos (geo/position b)
        a-im (geo/inv-mass a)
        b-im (geo/inv-mass b)
        correction-v (mul-vr normal
                             (* percent (/ (max (- depth k-slop) 0.0)
                                           (+ a-im b-im))))
        a (geo/position a (sub a-pos (mul-vr correction-v a-im)))
        b (geo/position b (add b-pos (mul-vr correction-v b-im)))]
    (assoc collision :a a :b b)))




(defn collision-response [collisions dt gravity]
  (let [collisions (map (partial add-collision-setup dt gravity) collisions)
        bodies (reduce (fn [bodies iter]
                         (reduce (fn [bodies {:keys [a b] :as collision}]
                                   (let [a (get bodies (geo/id a) a)
                                         b (get bodies (geo/id b) b)
                                         collision (assoc collision :a a :b b)
                                         {:keys [a b]} (-> (apply-impulse collision)
                                                           #_position-correction-single)]
                                     (assoc bodies
                                            (geo/id a) a
                                            (geo/id b) b)))
                                 {}
                                 collisions))
                       {}
                       ;;In mutable version this was set to 10
                       ;;interations, due to a fix I put in using
                       ;;immutable data structures I don't think
                       ;;it is required to do multiple iterations
                       ;;to get stability.
                       (range 1))]
    (mapv (fn [{:keys [a b] :as col}]
            (assoc col
                   :a (get bodies (geo/id a))
                   :b (get bodies (geo/id b))))
          collisions)))


(defn is-static? [body]
  (and (= (geo/inv-mass body) 0.0)
       (= (geo/inv-moment-i body) 0.0)))

(defn pre-position-solver
  "takes a list of collisions and returns a map of id -> total contact count"
  [collisions]
  (reduce (fn [contact-cnt-map {:keys [contacts a b]}]
            (-> contact-cnt-map
                (update (:id a) (fnil + 0) (count contacts))
                (update (:id b) (fnil + 0) (count contacts))))
          {}
          collisions))

(def pos-dampen 0.9)

(defn contact-share* [cnt]
  (/ pos-dampen cnt))

(def contact-share (memoize contact-share*))

(defn solve-positions*
  "takes a list of collisions and returns a map of id -> position impulse [x y]"
  [collisions pos-impulse-map contact-cnt-map scale]
  (let [colls (map (fn [{:keys [a b depth normal penetration] :as col}]
                     (let [imp-a (get pos-impulse-map (geo/id a) [0 0])
                           imp-b (get pos-impulse-map (geo/id b) [0 0])
                           a-pos (geo/position a)
                           b-pos (geo/position b)
                           a->b (sub (add imp-a a-pos)
                                  (add imp-b (sub a-pos penetration)))]
                       (assoc col :separation (dot normal a->b))))
                collisions)
        imp-map (reduce
                 (fn [imp-map {:keys [a b normal separation]}]
                   (if (< separation 0)
                     imp-map
                     (let [pos-imp (* scale (- separation k-slop))
                           pos-imp (if (or (is-static? a)
                                           (is-static? b))
                                     (* pos-imp 2.0)
                                     pos-imp)
                           id-a (geo/id a)
                           id-b (geo/id b)
                           [imp-x-a imp-y-a] (get imp-map id-a [0 0])
                           [imp-x-b imp-y-b] (get imp-map id-b [0 0])
                           [n-x n-y] normal]
                       (cond-> imp-map
                         (not (is-static? a))
                         (assoc
                          (:id a)
                          (let [cs (contact-share (get contact-cnt-map id-a))]
                            [(- imp-x-a (* n-x pos-imp cs))
                             (- imp-y-a (* n-y pos-imp cs))]))

                         (not (is-static? b))
                         (assoc
                          (:id b)
                          (let [cs (contact-share (get contact-cnt-map id-b))]
                            [(+ imp-x-b (* n-x pos-imp cs))
                             (+ imp-y-b (* n-y pos-imp cs))]))))))
                        pos-impulse-map
                        colls)]
    [imp-map colls]))

(defn post-solve-position [bodies pos-impulse-map]
  (map (fn [body]
         (let [[imp-x imp-y :as imp] (pos-impulse-map (geo/id body) [0 0])]
           (if (or (not= imp-x 0.0) (not= imp-y 0.0))
             (-> body
                 (geo/prev-position (geo/position body))
                 (geo/translate imp))
             body)))
    (remove is-static? bodies)))

(def pos-iterations 3)
(def pos-warming 0.8)
(def pos-scale 0.2)

(def vel-iterations 4)
(def vel-scale 0.2)

(def fric-multiplyer 5)
(def rest-thresh 4.0)
(def rest-thresh-tan 6.0)

(defn has-static? [{:keys [a b]}]
  (or (is-static? a)
      (is-static? b)))

(defn solve-positions [collisions pos-impulse-map]
  (let [contact-cnt-map (pre-position-solver collisions)
        [imp-map colls] (reduce (fn [[imp-map collisions] iter]
                                  (solve-positions* collisions
                                                    imp-map
                                                    contact-cnt-map
                                                    pos-scale))
                                [(or pos-impulse-map {}) collisions]
                                (range pos-iterations))
        body-map (reduce (fn [body-map {:keys [a b]} colls]
                           (assoc body-map (geo/id a) a (geo/id b) b))
                         {}
                         colls)
        bodies (post-solve-position (vals body-map) imp-map)
        imp-map (zipmap (keys imp-map)
                        (map #(mul-vr % pos-warming) (vals imp-map)))]
    [bodies colls imp-map]))

(defn contact-id [a b contact]
  [(geo/id a) (geo/id b) contact])

(defn solve-velocity* [res-map bodies collisions scale]
  (let [scale-sqr (* scale scale)]
    (reduce
     (fn [[res-map bodies] {:keys [contacts depth penetration
                                   normal tangent a b
                                   restitution
                                   dynamic-friction
                                   static-friction
                                   separation]}]
       (let [contact-share (/ 1 (count contacts))
             a-id (geo/id a)
             b-id (geo/id b)
             a (get bodies a-id)
             b (get bodies b-id)
             a-pos (geo/position a)
             b-pos (geo/position b)
             a-rot (geo/rotation a)
             b-rot (geo/rotation b)
             a-pos-prev (geo/prev-position a)
             b-pos-prev (geo/prev-position b)
             a-rot-prev (geo/prev-rotation a)
             b-rot-prev (geo/prev-rotation b)
             a (-> a
                   (geo/linear-velocity (sub a-pos a-pos-prev))
                   (geo/angular-velocity (- a-rot a-rot-prev)))
             b (-> a
                   (geo/linear-velocity (sub b-pos b-pos-prev))
                   (geo/angular-velocity (- b-rot b-rot-prev)))]
         (reduce
          (fn [[res-map bodies] contact]
            (let [vel-a (geo/linear-velocity a)
                  vel-b (geo/linear-velocity b)
                  a-vel-a (geo/angular-velocity a)
                  a-vel-b (geo/angular-velocity b)
                  cid (contact-id a b contact)
                  ra (sub contact a-pos)
                  rb (sub contact b-pos)
                  vel-point-a (add vel-a (mul-vr (perp ra) a-vel-a))
                  vel-point-b (add vel-b (mul-vr (perp rb) a-vel-b))
                  rel-vel (sub vel-point-a vel-point-b)
                  norm-vel (dot normal rel-vel)
                  tan-vel (dot tangent rel-vel)
                  tan-speed (js/Math.abs tan-vel)
                  tan-vel-dir (if (neg? tan-vel) -1 1)
                  norm-imp (/ (+ 1.0 restitution) norm-vel)
                  norm-force (* (clamp (+ separation norm-vel) 0.0 1.0)
                                fric-multiplyer)
                  [max-fric tan-imp] (if-not (> tan-speed
                                                (* dynamic-friction
                                                   static-friction
                                                   norm-force
                                                   scale-sqr))
                                       [js/Number.POSITIVE_INFINITY tan-vel]
                                       [tan-speed (clamp (* dynamic-friction
                                                            tan-vel-dir
                                                            scale-sqr)
                                                         (* -1.0 tan-speed)
                                                         tan-speed)])
                  oacn (cross-vv ra normal)
                  obcn (cross-vv rb normal)
                  a-inv-m (geo/inv-mass a)
                  b-inv-m (geo/inv-mass b)
                  a-inv-mi (geo/inv-moment-i a)
                  b-inv-mi (geo/inv-moment-i b)
                  share (/ contact-share
                           (+ a-inv-m
                              b-inv-m
                              (* a-inv-mi oacn oacn)
                              (* a-inv-mi obcn obcn)))
                  tan-imp (* tan-imp share)
                  norm-imp (* norm-imp share)
                  [c-norm-imp c-tan-imp] (get res-map cid [0.0 0.0])
                  [norm-imp c-norm-imp] (if (and (< norm-vel 0)
                                                 (> (* norm-vel norm-vel)
                                                    (* rest-thresh scale-sqr)))
                                          [norm-imp 0.0]
                                          [(let [cimp (min (+ c-norm-imp
                                                              norm-imp) 0)]
                                             [(- c-norm-imp cimp)
                                              cimp])])
                  [tan-imp c-tan-imp] (if (> (* tan-vel tan-vel)
                                             (* rest-thresh scale-sqr))
                                        [tan-imp 0.0]
                                        [(let [cimp (clamp (+ c-tan-imp tan-imp)
                                                           (* -1.0 max-fric)
                                                           max-fric)]
                                           [(- c-tan-imp cimp)
                                            cimp])])
                  [nx ny] normal
                  [tx ty] tangent
                  imp [(+ (* nx norm-imp) (* tx tan-imp))
                       (+ (* ny norm-imp) (* ty tan-imp))]
                  bodies (cond-> bodies
                           (is-static? a)
                           (assoc a-id
                                  (-> a
                                      (geo/prev-position
                                       (add (geo/prev-position a)
                                            (mul-vr imp a-inv-m)))
                                      (geo/prev-rotation
                                       (+ (geo/prev-rotation a)
                                          (* (cross-vv ra imp)
                                             a-inv-mi)))))
                           (is-static? b)
                           (assoc b-id
                                  (-> b
                                      (geo/prev-position
                                       (sub (geo/prev-position b)
                                            (mul-vr imp b-inv-m)))
                                      (geo/prev-rotation
                                       (- (geo/prev-rotation a)
                                          (* (cross-vv rb imp)
                                             b-inv-mi))))))]
              [(assoc res-map cid [c-norm-imp c-tan-imp])
               bodies]))
          [res-map bodies]
          contacts)))
     [res-map bodies]
     collisions)))

(defn solve-velocity [bodies collisions]
  (reduce (fn [[res-map bodies] iter]
            (solve-velocity res-map bodies collisions vel-scale))
          [{} bodies]
          (range vel-iterations)))

(ns peli.response
  (:require [peli.geometry :as geo]
            [peli.physics :as phy]
            [peli.collision :as coll]
            [clojure.core.matrix :as matrix]
            [peli.phy-math :refer [sub add dot cross-vr cross-rv
                                   cross-vv mul-vr dist-sqr =*
                                   transpose normalize clamp
                                   perp]]))

(declare solve-positions)

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


(defn add-collision-setup [dt gravity {:keys [a b restitution] :as col}]
  (let [restitution (if gravity
                      (reduce (gravity-check-fn a b dt gravity)
                              restitution
                              (:contacts col))
                      restitution)]
    (assoc col :restitution restitution)))


(defn infinit-mass-correction [collision]
  (-> collision
      (update :a geo/linear-velocity 0.0)
      (update :b geo/linear-velocity 0.0)
      (update :a geo/angular-velocity 0.0)
      (update :b geo/angular-velocity 0.0)))


(defn- sqr [val]
  (* val val))


(defn apply-impulse [collision]
  (let [{:keys [a b contacts normal depth]
         rest-c :restitution
         sf-c :static-friction
         df-c :dynamic-friction} collision
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
       (fn [collision contact]
         (let [{:keys [a b]} collision
               ra (sub contact pos-a)
               rb (sub contact pos-b)
               rv (sub (sub (add
                             (geo/linear-velocity b)
                             (cross-rv (geo/angular-velocity b) rb))
                         (geo/linear-velocity a))
                    (cross-rv (geo/angular-velocity a) ra))
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
                   rc (if (< 0.0 rest-c) 0.0 rest-c)
                   imp (/ (/ (* -1.0
                                  (+ 1.0 rc)
                                  contact-vel)
                               inv-mass-sum)
                            c-cnt)
                   ;; Apply Impulse
                   impulse (mul-vr normal imp)
                   a (phy/apply-impulse a (mul-vr impulse -1.0) ra)
                   b (phy/apply-impulse b impulse rb)
                   ;; Friction impulse
                   rv (sub (sub (add (geo/linear-velocity b)
                                     (cross-rv (geo/angular-velocity b) rb))
                             (geo/linear-velocity a))
                        (cross-rv (geo/angular-velocity a) ra))
                   t (normalize
                      (sub rv (mul-vr normal (dot rv normal))))
                   ;; Tangent magnitude
                   tan (/ (/ (* -1.0 (dot rv t))
                             inv-mass-sum)
                          c-cnt)]
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

(def k-slop 0.005)
(def percent 0.8)

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
                                         {:keys [a b]} (apply-impulse collision)]
                                     (assoc! bodies
                                            (geo/id a) a
                                            (geo/id b) b)))
                                 bodies
                                 collisions))
                       (transient {})
                       (range 6))]
    (mapv (fn [{:keys [a b] :as col}]
            (assoc col
                   :a (get bodies (geo/id a))
                   :b (get bodies (geo/id b))))
          collisions)))


(defn is-static? [body]
  (and (= (geo/inv-mass body) 0.0)
       (= (geo/inv-moment-i body) 0.0)))


(def pos-dampen 0.8)
(defn contact-share [cnt]
  (/ pos-dampen cnt))


(defn pre-position-solver
  "takes a list of collisions and returns a map of id -> total contact count"
  [collisions]
  (let [cnm  (reduce (fn [cnm {:keys [contacts a b]}]
                       (-> cnm
                           (update (:id a) (fnil + 0) (count contacts))
                           (update (:id b) (fnil + 0) (count contacts))))
                     {}
                     collisions)]
    (zipmap (keys cnm) (map contact-share (vals cnm)))))



(defn solve-positions*
  "takes a list of collisions and returns a map of id -> position impulse [x y]"
  [collisions pos-impulse-map contact-share-map scale]
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
                     (let [pos-imp (* scale (max (- separation k-slop) 0.0))
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
                          (let [cs (get contact-share-map id-a)]
                            [(- imp-x-a (* n-x pos-imp cs))
                             (- imp-y-a (* n-y pos-imp cs))]))

                         (not (is-static? b))
                         (assoc
                          (:id b)
                          (let [cs (get contact-share-map id-b)]
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

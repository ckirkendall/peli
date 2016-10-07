(ns peli.impl.engine
  (:require [peli.protocols :as p]
            [peli.impl.collision :as collision]
            [peli.impl.response :as response]
            [peli.impl.physics :as physics]
            [peli.impl.frame :as frame]
            [peli.impl.phy-math :as math]))

;; ---------------------------------------------------------------------
;; Default Implementations

(extend-type #?(:clj Object :cljs default)
  p/IGravityFactor
  (gravity-factor [this] nil)

  p/IBodyPhysics
  (apply-physics [this dt]
    (physics/apply-physics this dt))

  p/ICollisionFilter
  (collidable? [this body] true)

  p/ICollision
  (collide [this collision game]
    [game collision])

  p/IRenderDepth
  (depth [this] 1))

;; ---------------------------------------------------------------------
;; Collision Management

(defn gen-collisions [game pairs]
  (reduce (fn [[shape->parent colls] [id1 id2]]
            (let [b1 (p/body game id1)
                  s1 (p/shape b1)
                  b2 (p/body game id2)
                  s2 (p/shape b2)
                  shape->parent (assoc shape->parent
                                       (p/id s1) (p/id b1)
                                       (p/id s2) (p/id b2))]
              (if-not (= 0 (p/inv-mass s1) (p/inv-mass s2))
                (if-let [collision (collision/collision s1 s2)]
                  [shape->parent (conj colls collision)]
                  [shape->parent colls])
                [shape->parent colls])))
          [{} []]
          pairs))

(defn filter-collisions [game pairs]
  (filter (fn [[aid bid]]
            (let [a (p/body game aid)
                  b (p/body game bid)]
              (and (p/collidable? a b)
                   (p/collidable? b a))))
          (map vec pairs)))

(defn dispatch-collision [game {:keys [a b] :as coll}]
  (let [b1 (p/body game a)
        b2 (p/body game b)]
    (reduce (fn [coll body]
              (p/collide body coll game))
            coll
            [b1 b2])))

(defn body-collision [body coll game]
  {:post [(satisfies? p/IGame (first %))
          (instance? peli.impl.collision.Collision (second %))]}
  (p/collide body coll game))


(defn dispatch-collisions [game shape->parent colls]
  (reduce (fn [[game colls] coll]
            (let [aid (shape->parent (p/id (:a coll)))
                  bid (shape->parent (p/id (:b coll)))
                  tmp-coll (assoc coll :a aid :b bid)
                  [game tmp-coll] (body-collision (p/body game aid) tmp-coll game)
                  [game tmp-coll] (if (:active tmp-coll)
                                    (body-collision (p/body game bid) tmp-coll game)
                                    [game tmp-coll])]
              [game (conj colls (assoc tmp-coll :a (:a coll) :b (:b coll)))]))
          [game []]
          colls))

(defn handle-collision-response [game shape->parent colls dt]
  (let [gravity (p/gravity game)
        colls (response/collision-response (filter :active? colls)
                                           dt
                                           gravity)
        imp-map (p/position-impulses game)
        [shape-map imp-map] (response/solve-positions colls (or imp-map {}))
        game (reduce (fn [game [id shape]]
                       (let [bid (shape->parent id)
                             body (-> (p/body game bid)
                                      (p/shape shape))]
                         (p/body game bid body)))
                     game
                     shape-map)]
    (p/position-impulses game imp-map)))


(defn apply-collisions [game dt]
  (let [bodies (p/bodies game)
        block-size (p/block-size game)
        [pairs matrix] (collision/generate-pairs block-size (vals bodies))
        pairs (filter-collisions game pairs)
        [shape->parent colls] (gen-collisions game pairs)
        [game colls] (dispatch-collisions game shape->parent colls)]
    (handle-collision-response game shape->parent colls dt)))


;; ---------------------------------------------------------------------
;; Physics

(defn apply-physics [game dt]
  (reduce (fn [game body]
            (let [gravity-factor (or (p/gravity-factor body) 1.0)
                  gravity (p/gravity game)]
              (p/body game (p/id body)
                (cond-> body
                  gravity
                  (physics/apply-gravity (math/mul-vr gravity gravity-factor) dt)
                  :always
                  (p/apply-physics dt)))))
          game
          (vals (p/bodies game))))


;; ---------------------------------------------------------------------
;; Step

(defn step [game dt]
  (-> game
      (apply-physics dt)
      (apply-collisions dt)
      frame/adjust-frame))
(ns peli.simple-game
  (:require
   #?(:clj [peli.impl.tile-map :as tm]
      :cljs [peli.impl.tile-map :as tm :refer-macros [inline-tile-map]])
   #?(:clj  [peli.adapters.jvm-adapter :as adapter]
      :cljs [peli.adapters.web-adapter :as adapter])
   [peli.protocols :as p]
   [peli.core :as peli]))


#?(:clj
   (def tile-map (tm/load-map "simple-game.tmx"))
   :cljs
   (def tile-map (tm/inline-tile-map "simple-game.tmx")))

(defrecord Boundry [id shape]
  p/IIdentity
  (id [this] (:id this))

  p/IBody
  (draw [this game] #_(p/draw (p/shape this) game))
  (shape [this] (:shape this))
  (shape [this val] (assoc this :shape val)))


(defn create-fps [id]
  (peli/create-dynamic-label
   {:id id
    :text-fn (fn [game] (str "FPS: " (p/fps game)))
    :position [20 20]}))

(defn create-boundry [shape]
  (Boundry. (gensym "boundry") shape))


(defn bound-vel [vel factor]
  (cond
    (= factor 0)
    vel
    (> factor 0)
    (min (+ vel factor) factor)
    :else
    (max (+ vel factor) factor)))




(defn get-state [game id]
  (:state (p/body game id)))


(defn set-state [game id field val]
  (let [body (p/body game id)
        state (:state body)]
    (p/body game id (assoc-in body [:state field] val))))

(defn move
  ([body [xf yf]]
   (let [shape (p/shape body)
         [vx vy :as lv] (p/linear-velocity shape)
         new-vel [(bound-vel vx xf)
                  (bound-vel vy yf)]]
     (p/shape body
              (p/linear-velocity shape new-vel))))
  ([game id vel-factors]
   (p/body game id (move (p/body game id) vel-factors))))

(defn step [game id dir]
  (let [mul-dir (if (= :right dir) 1.0 -1.0)
       {:keys [state] :as body} (p/body game id)
        vy (if (:stepping state) 0 -0.3)
        new-game (move game id [(* mul-dir 200) vy])]
    (set-state new-game id :stepping true)))


(defn jump [game id]
  (let [body (p/body game id)]
    (if (get-in body [:state :jumping])
      game
      (p/body game id
        (let [[_ gy] (p/gravity game)
              y-factor (* -1.0 gy)
              new-body (move body [0 y-factor])]
          (if (= (p/linear-velocity (p/shape body))
                 (p/linear-velocity (p/shape new-body)))
            body
            (assoc-in new-body
                      [:state :jumping]
                      true)))))))


(defrecord Hero [id sprite-id shape state]
  p/IIdentity
  (id [this] (:id this))

  p/IBody
  (draw [this game]
      (let [shape (:shape this)
            radius (p/radius shape)
            [x y] (peli/framed-position game (p/position shape))]
        [:sprite {:position [(- x radius)
                             (- y radius)]
                  :width (* radius 2)
                  :height (* radius 2)
                  :sprite-id sprite-id}]))
  (shape [this] (:shape this))
  (shape [this val] (assoc this :shape val))

  p/ICollision
  (collide [this {:keys [normal a b] :as collision} game]
    (let [[nx ny] normal
          [_ ly] (p/linear-velocity (p/shape this))]
      (if (or (and (pos? ny) (= a id))
              (and (neg? ny) (= b id)))
        [(-> game
             (set-state id :jumping false)
             (set-state id :stepping false))
         collision]
        [game collision])))

  p/IInteractive
  (event-handlers [this]
    {:keydown (fn [e game]
                 (let [key-code (get-in e [:data :key-code])
                       [_ gy] (p/gravity game)]
                   (case key-code
                     39 (step game id :right)
                     37 (step game id :left)
                     32 (jump game id)
                     game)))
     :keyup (fn [e game]
                 (let [key-code (get-in e [:data :key-code])]
                   (case key-code
                     32 (set-state game id :spacebar-down false)
                     game)))
     :click (fn [e game]
              (jump game id))}))

(defn create-hero [sprite-id shape]
  (let [shape (peli/create-circle (assoc shape :density 1))
        id :hero]
    (Hero. id sprite-id (p/moment-i shape peli/infinity) {})))


(def factory
  {"hero" (fn [shape]
           (create-hero :hero shape))
   "boundry" create-boundry})

(def tile-info (-> (tm/tile-map->bodies tile-map factory)
                   (assoc-in [:sprites :hero] "practice-game-main-character.png")))

(def sounds
  {:stomp "http://themushroomkingdom.net/sounds/wav/smw/smw_stomp.wav"
   :jump "http://themushroomkingdom.net/sounds/wav/smw/smw_jump.wav"
   :reward "http://themushroomkingdom.net/sounds/wav/smw/smw_coin.wav"})

(def frame (peli/create-frame 2000 1000))
(def board (peli/create-board 5000 1000))

(def world (peli/create-world {:id :world1
                               :bodies (assoc (into {} (map #(do [(:id %) %])
                                                         (:bodies tile-info)))
                                              :fps-label (create-fps :fps-label))
                               :sprites (:sprites tile-info)
                               :sounds sounds
                               :camera-focus :hero
                               :frame frame
                               :board board
                               :gravity peli/default-gravity
                               :event-handlers {:mousemove peli/mousemove-global}}))

(def adapter-config
  #?(:clj (adapter/adapter-config)
     :cljs (adapter/adapter-config "MyGameDiv")))

(def game
  (atom (peli/create-game
         {:id :my-game
          :worlds {(p/id world) world}
          :block-size 50
          :fps 60
          :pos-impulse-map {}
          :adapter-config adapter-config})))


(peli.core/start game :world1)

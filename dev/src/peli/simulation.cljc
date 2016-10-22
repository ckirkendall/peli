(ns peli.simulation
  (:require
   [peli.protocols :as p]
   #?(:clj [peli.java-adapter :as adapter]
      :cljs [peli.pixi-adapter :as adapter])
   [peli.impl.game :as game]
   [peli.impl.engine :as engine]
   [peli.impl.geometry :as geo]
   [peli.impl.physics :as phy]
   [peli.impl.collision :as coll]
   [peli.impl.frame :as frame]
   [peli.impl.phy-math :refer [dot mul-vr normalize sub infinity]]
   [peli.impl.text :as text]
   [peli.impl.utils :as utils]))

(def width 600.0)
(def height 600.0)
(def frame-width width)
(def frame-height height)
(def block-size 40)


(defn create-fps [id]
  (text/create-dynamic-label
   {:id id
    :text-fn (fn [game] (str "FPS: " (p/fps game)))
    :position [20 20]}))



(def sounds
  {:stomp "http://themushroomkingdom.net/sounds/wav/smw/smw_stomp.wav"
   :jump "http://themushroomkingdom.net/sounds/wav/smw/smw_jump.wav"
   :reward "http://themushroomkingdom.net/sounds/wav/smw/smw_coin.wav"})

(def sprites
  {:follower #?(:cljs "http://localhost:8000/follower.png"
                :clj "follower.png")})


(def gfx-adapter
  #?(:cljs (adapter/create-graphics-adapter "myGameDiv" {:width frame-width
                                                         :height frame-height
                                                         :sprites sprites})
           :clj  (adapter/create-graphics-adapter {:width frame-width
                                                   :height frame-height
                                                   :sprites sprites})))
(def input-adapter
  #?(:clj (adapter/create-input-adapter gfx-adapter)
     :cljs (adapter/create-input-adapter (:stage gfx-adapter))))

(def sound-adapter
  #?(:clj (adapter/create-sound-adapter sounds)
     :cljs (adapter/create-sound-adapter sounds)))


(defrecord FloatingBox [id shape event-handlers]
  p/IIdentity
  (id [this] (:id this))

  p/IBody
  (draw [this game]
    (p/draw (:shape this) game))
  (shape [this] (:shape this))
  (shape [this val] (assoc this :shape val))

  p/IGravityFactor
  (gravity-factor [this] -0.5)

  p/IInteractive
  (event-handlers [this] event-handlers))


(def follower-collors [0xffffff 0xff0000 0x00ff00 0x0000ff])

(defrecord Follower [id shape color event-handlers]
  p/IIdentity
  (id [this] (:id this))

  p/IBody
  (draw [this game]
    (let [shape (:shape this)
          radius (p/radius shape)
          [x y] (utils/framed-position game (p/position shape))]
      [:sprite {:position [(- x radius)
                           (- y radius)]
                :width (* radius 2)
                :height (* radius 2)
                :sprite-id :follower
                :rotation (- (p/rotation shape) (* Math/PI 0.25))
                :pivot [x y]}]))
  (shape [this] (:shape this))
  (shape [this val] (assoc this :shape val))

  p/IGravityFactor
  (gravity-factor [this] 0)

  p/IStep
  (step [this game]
    (if (:mouse-global (p/world-state game))
      (let [mouse (:mouse-global (p/world-state game))
            shape (p/shape this)
            velocity 100
            pos (p/position shape)
            [nx ny :as normal] (normalize (sub mouse pos))
            velocity (mul-vr normal velocity)
            dir (cond
                  (and (pos? nx) (pos? (* nx ny))) 1.0
                  (and (pos? nx) (neg? (* nx ny))) -1.0
                  (and (neg? nx) (pos? (* nx ny))) -1.0
                  (and (neg? nx) (neg? (* nx ny))) 1.0)
            angle (* dir (Math/acos (dot normal [1 0])))]
        (p/shape this
                 (-> shape
                     (p/linear-velocity velocity)
                     (p/rotation angle))))
      this))

  p/IInteractive
  (event-handlers [this] event-handlers))



(def frame (frame/->Frame 0 0 frame-width frame-height))
(def board (frame/->Board width height))

(def circle1 (-> (geo/create-circle {:id :circle1
                                    :position [50.0 250.0]
                                    :radius 35.0
                                    :density 1})
                (phy/apply-force [1150.0 0.0] [[15.0 260.0]] 1000.0)))


(def box1 (geo/create-box {:id :box1
                          :position [300.0 225.0]
                          :width 50.0
                          :height 50.0
                          :density 1.0}))

(def box2 (FloatingBox. :box2
                        (-> (geo/create-box {:id :box2
                                             :position [450.0 220.0]
                                             :width 50.0
                                             :height 50.0
                                             :density 1.0})
                            (phy/apply-force [400.0 0.0] [[450.0 200.0]] 1000.0))
                        {:click (fn [e game]
                                  (let [body (p/body game :box2)
                                        shape (p/shape body)
                                        [vx vy] (p/linear-velocity shape)]
                                    (p/play-sound game :stomp)
                                    (p/body game :box2
                                      (p/shape body
                                        (p/linear-velocity shape [vx 100])))))}))

(def follower (Follower. :follower
                         (geo/create-circle {:id :follower
                                             :position [250.0 100.0]
                                             :radius 20
                                             :density 1})
                         0xffffff
                         {:click (fn [e game]
                                   (let [this (p/body game :follower)]
                                     (p/body game :follower
                                       (assoc this :color
                                              (rand-nth follower-collors)))))}))


(def left (geo/create-box {:id :bound-left
                           :position [0 (/ height 2.0)]
                           :width 10
                           :height height
                           :density infinity}))

(def right (geo/create-box {:id :bound-right
                           :position [width (/ height 2.0)]
                           :width 10
                           :height height
                           :density infinity}))

(def top (geo/create-box {:id :bound-top
                           :position [(/ width 2.0) 0]
                           :width width
                           :height 10
                           :density infinity}))

(def base (geo/create-box {:id :bound-bottom
                           :position [(/ width 2.0) height]
                           :width width
                           :height 10
                           :density infinity}))

(defn mousemove-global [e game]
  (let [pos (get-in e [:data :position])
        cur-state (p/world-state game)]
    (p/world-state game (assoc cur-state
                               :mouse-local pos
                               :mouse-global (utils/global-position game pos)))))

(def world (game/map->World {:id :world1
                             :bodies {:follower follower
                                      :circle1 circle1
                                      :box1 box1
                                      :box2 box2
                                      :bound-bottom base
                                      :bound-top top
                                      :bound-left left
                                      :bound-right right
                                      :fps-label (create-fps :fps-label)}
                             :sprites {}
                             :sounds {}
                             :camera-focus :follower
                             :frame frame
                             :board board
                             :gravity phy/default-gravity
                             :event-handlers {:mousemove mousemove-global}}))



(def game
  (atom (game/map->Game
         {:id :my-game
          :worlds {(p/id world) world}
          :block-size 50
          :fps 60
          :active-world world
          :pos-impulse-map {}
          :graphics-adapter gfx-adapter
          :input-adapter input-adapter
          :sound-adapter sound-adapter})))

(game/init-game game)

(defn start []
  (engine/animation-loop game))

(defn stop []
  (reset! engine/running false))

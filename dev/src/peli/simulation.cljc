(ns peli.simulation
  (:require
   [peli.protocols :as p]
   [peli.core :as peli :refer [dot mul-vr normalize sub infinity
                               framed-position global-position create-game
                               create-world create-circle create-box
                               create-frame create-board create-dynamic-label
                               apply-force mousemove-global]]
   #?(:clj  [peli.adapters.jvm-adapter :as adapter]
      :cljs [peli.adapters.web-adapter :as adapter])))

(def width 600.0)
(def height 600.0)
(def frame-width width)
(def frame-height height)
(def block-size 40)

(def sounds
  {:stomp "http://themushroomkingdom.net/sounds/wav/smw/smw_stomp.wav"
   :jump "http://themushroomkingdom.net/sounds/wav/smw/smw_jump.wav"
   :reward "http://themushroomkingdom.net/sounds/wav/smw/smw_coin.wav"})

(def sprites
  {:follower #?(:cljs "http://localhost:8000/follower.png"
                :clj "follower.png")})

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
          [x y] (framed-position game (p/position shape))]
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

(defn create-fps [id]
  (create-dynamic-label
   {:id id
    :text-fn (fn [game] (str "FPS: " (p/fps game)))
    :position [20 20]}))

(def frame (create-frame frame-width frame-height))
(def board (create-board width height))

(def circle1 (-> (create-circle {:id :circle1
                                 :position [50.0 250.0]
                                 :radius 35.0
                                 :density 1})
                 (apply-force [1150.0 0.0] [[15.0 260.0]] 1000.0)))

(def box1 (create-box {:id :box1
                       :position [300.0 225.0]
                       :width 50.0
                       :height 50.0
                       :density 1.0}))

(def box2 (FloatingBox. :box2
                        (-> (create-box {:id :box2
                                         :position [450.0 220.0]
                                         :width 50.0
                                         :height 50.0
                                         :density 1.0})
                            (apply-force [400.0 0.0] [[450.0 200.0]] 1000.0))
                        {:click (fn [e game]
                                  (let [body (p/body game :box2)
                                        shape (p/shape body)
                                        [vx vy] (p/linear-velocity shape)]
                                    (p/play-sound game :stomp)
                                    (p/body game :box2
                                      (p/shape body
                                        (p/linear-velocity shape [vx 100])))))}))

(def follower (Follower. :follower
                         (create-circle {:id :follower
                                         :position [250.0 100.0]
                                         :radius 20
                                         :density 1})
                         0xffffff
                         {:click (fn [e game]
                                   (let [this (p/body game :follower)]
                                     (p/body game :follower
                                       (assoc this :color
                                              (rand-nth follower-collors)))))}))


(def left (create-box {:id :bound-left
                       :position [0 (/ height 2.0)]
                       :width 10
                       :height height
                       :density infinity}))

(def right (create-box {:id :bound-right
                        :position [width (/ height 2.0)]
                        :width 10
                        :height height
                        :density infinity}))

(def top (create-box {:id :bound-top
                      :position [(/ width 2.0) 0]
                      :width width
                      :height 10
                      :density infinity}))

(def base (create-box {:id :bound-bottom
                       :position [(/ width 2.0) height]
                       :width width
                       :height 10
                       :density infinity}))


(def world (create-world {:id :world1
                          :bodies {:follower follower
                                   :circle1 circle1
                                   :box1 box1
                                   :box2 box2
                                   :bound-bottom base
                                   :bound-top top
                                   :bound-left left
                                   :bound-right right
                                   :fps-label (create-fps :fps-label)}
                          :sprites sprites
                          :sounds sounds
                          :camera-focus :follower
                          :frame frame
                          :board board
                          :gravity peli/default-gravity
                          :event-handlers {:mousemove mousemove-global}}))

(def adapter-config
  #?(:clj (adapter/adapter-config)
     :cljs (adapter/adapter-config "MyGameDiv")))

(def game
  (atom (create-game
         {:id :my-game
          :worlds {(p/id world) world}
          :block-size 50
          :fps 60
          :pos-impulse-map {}
          :adapter-config adapter-config})))

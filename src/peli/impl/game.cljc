(ns peli.impl.game
  (:require [peli.protocols :as p]
            [peli.impl.events :as events]))

(defrecord World [id board bodies sprites sounds gravity world-state event-handlers camera-focus frame]
  p/IIdentity
  (id [this] (:id this))

  p/IInteractive
  (event-handlers [this]
    (:event-handlers this))

  p/IWorld
  (bodies [this]
    (:bodies this))
  (add-body [this body]
    (update this :bodies (fnil conj {}) [(p/id body) body]))
  (remove-body [this id]
    (update this :bodies dissoc id))
  (sprites [this] (:sprites this))
  (sounds [this] (:sounds this))
  (board [this] (:board this))
  (frame [this] (:frame this))
  (frame [this val] (assoc this :frame val))
  (camera-focus [this]
    (when (:camera-focus this)
      (let [id (:camera-focus this)
            body (p/body this id)]
        (p/position (p/shape body)))))
  (camera-focus [this id]
    (assoc this :camera-focus id))
  (body [this id]
    (get-in this [:bodies id]))
  (body [this id val]
    (assoc-in this [:bodies id] val))
  (gravity [this]
    (:gravity this [0.0 0.0]))
  (world-state [this] (:world-state this))
  (world-state [this val] (assoc this :world-state val)))

(defrecord Game [id worlds block-size active-world pos-impulse-map
                 graphics-adapter input-adapter sound-adapter fps
                 collision-matrix]
  p/IInit
  (init [this _]
    (when (:active-world this)
      (events/initialize-handlers! (:active-world this)))
    this)

  p/IIdentity
  (id [this] (:id this))

  p/IGame
  (worlds [this] (:worlds this))
  (world [this id] (get-in this [:worlds id]))
  (block-size [this] (:block-size this))
  (block-size [this val] (assoc this :block-size val))
  (fps [this] (:fps this))
  (fps [this val] (assoc this :fps val))
  (active-world [this] (:active-world this))
  (activate-world [this id]
    (events/initialize-handlers! (p/world this id))
    (assoc this :active-world (p/world this id)))
  (position-impulses [this] (:pos-impulse-map this))
  (position-impulses [this val] (assoc this :pos-impulse-map val))
  (graphics-adapter [this] (:graphics-adapter this))
  (graphics-adapter [this val] (assoc this :graphics-adapter val))
  (input-adapter [this] (:input-adapter this))
  (input-adapter [this val] (assoc this :input-adapater val))
  (sound-adapter [this] (:sound-adapter this))
  (sound-adapter [this val] (assoc this :sound-adapter val))
  (collision-matrix [this] (:collision-matrix this))
  (collision-matrix [this val] (assoc this :collision-matrix val))

  p/IWorld
  (bodies [this]
    (p/bodies (p/active-world this)))
  (add-body [this body]
    (events/add-input-handlers! (p/id body) (p/event-handlers body))
    (update this :active-world p/add-body body))
  (remove-body [this id]
    (events/remove-input-handlers! id)
    (update this :active-world p/remove-body id))
  (sprites [this] (p/sprites (p/active-world this)))
  (sounds [this] (p/sounds (p/active-world this)))
  (board [this] (p/board (p/active-world this)))
  (frame [this] (p/frame (p/active-world this)))
  (frame [this val] (update this :active-world p/frame val))
  (camera-focus [this]
    (p/camera-focus (p/active-world this)))
  (camera-focus [this id]
    (update this :active-world p/camera-focus id))
  (body [this id]
    (p/body (p/active-world this) id))
  (body [this id val]
    (let [cur (p/body this id)]
      (when-not (identical? (p/event-handlers val)
                            (p/event-handlers cur))
        (events/add-input-handlers! (p/id val) (p/event-handlers val))))
    (update this :active-world p/body id val))
  (gravity [this]
    (p/gravity (p/active-world this)))
  (world-state [this] (p/world-state (p/active-world this)))
  (world-state [this val]
    (update this :active-world p/world-state val))

  p/IInteractive
  (event-handlers [this]
    (p/event-handlers (p/active-world this)))

  p/ISoundAdapter
  (play-sound [this id]
    (let [adapter (:sound-adapter this)]
      (p/play-sound adapter id))))




(defn- set-global-input-handler [game dispatcher]
  (p/input-adapter game
                   (reduce (fn [adapter event]
                             (if (p/supported-event? adapter event)
                               (p/set-event-handler adapter event dispatcher)
                               adapter))
                           (p/input-adapter game)
                           events/possible-input-events)))

(defn init-game [game-atm]
  (let [input-dispatcher (events/event-dispatcher game-atm)]
    (swap! game-atm (fn [game]
                      (-> game
                          (p/init nil)
                          (set-global-input-handler input-dispatcher))))))

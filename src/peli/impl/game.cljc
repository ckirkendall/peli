(ns peli.impl.game
  (:require [peli.protocols :as p]))

(defrecord World [id bodies sprites sounds gravity]
  p/IIdentity
  (id [this] (:id this))

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
    (:gravity this [0.0 0.0])))

(defrecord Game [id worlds block-size fps active-world pos-impulse-map graphics-adapter frame-rate]
  p/IIdentity
  (id [this] (:id this))

  p/IGame
  (worlds [this] (:worlds this))
  (world [this id] (get-in this [:worlds id]))
  (block-size [this] (:block-size this))
  (block-size [this val] (assoc this :block-size val))
  (fps [this] (:fps this))
  (active-world [this] (:active-world this))
  (activate-world [this id]
    (assoc this :active-world (p/world this id)))
  (position-impulses [this] (:pos-impulse-map this))
  (position-impulses [this val] (assoc this :pos-impulse-map val))
  (graphics-adapter [this] (:graphics-adapter this))
  (graphics-adapter [this val] (assoc this :graphics-adapter val))

  p/IWorld
  (bodies [this]
    (p/bodies (p/active-world this)))
  (add-body [this body]
    (update this :active-world p/add-body body))
  (remove-body [this id]
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
    (update this :active-world p/body id val))
  (gravity [this]
    (p/gravity (p/active-world this)))

  p/IGraphicsAdapter
  (render [this game]
    (assoc this
           :graphics-adapter
           (p/render (p/graphics-adapter this) this)))
  (draw-polygon [this opts]
    (p/draw-polygon (p/graphics-adapter this) opts))
  (draw-circle [this opts]
    (p/draw-circle (p/graphics-adapter this) opts))
  (draw-rect [this opts]
    (p/draw-rect (p/graphics-adapter this) opts))
  (draw-rounded-rect [this opts]
    (p/draw-rounded-rect (p/graphics-adapter this) opts))
  (draw-sprite [this opts]
    (p/draw-sprite (p/graphics-adapter this) opts)))

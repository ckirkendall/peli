(ns peli.protocols)

;; ---------------------------------------------------------------------
;; Base

(defprotocol IInit
  (init [this opts]))

(defprotocol IIdentity
  (id [this]))

(defprotocol IActive
  (active [this] [this val]))


;; ---------------------------------------------------------------------
;; Game

(defprotocol IWorld
  (bodies [this])
  (add-body [this body])
  (remove-body [this id])
  (sprites [this])
  (sounds [this])
  (board [this])
  (frame [this] [this new])
  (camera-focus [this] [this id])
  (body [this id] [this id val])
  (gravity [this])
  (world-state [this] [this val]))

(defprotocol IGame
  (fps [this] [this val])
  (block-size [this] [this new])
  (active-world [this])
  (activate-world [this id])
  (worlds [this])
  (world [this id])
  (position-impulses [this] [this val])
  (graphics-adapter [this] [this val])
  (input-adapter [this] [this val])
  (sound-adapter [this] [this val])
  (adapter-config [this] [this val])
  (collision-matrix [this] [this val]))


;; ---------------------------------------------------------------------
;; Body

(defprotocol IRenderDepth
  (depth [this]))

(defprotocol IBody
  (draw [this game])
  (shape [this] [this val]))

(defprotocol IBodyPhysics
  (apply-physics [this dt]))

(defprotocol ICollisionFilter
  (collidable? [this collision]))

(defprotocol ICollision
  (collide [this collision game]))

(defprotocol IGravityFactor
  (gravity-factor [this]))

(defprotocol IStep
  (step [this game]))

(defprotocol IInteractive
  (event-handlers [this]))

(defprotocol IStatic
  (static? [this]))


;; ---------------------------------------------------------------------
;; Geometry

(defprotocol IShape
  ;;Rotation
  (rotate [this radians])
  (rotation [this] [this val])
  (prev-rotation [this] [this val])
  ;;Position
  (translate [this [x y]])
  (position [this] [this [x y]])
  (prev-position [this] [this [x y]])

  ;;Mass and Inertia
  (mass [this] [this val])
  (inv-mass [this])
  (moment-i [this] [this val])
  (inv-moment-i [this])
  ;;Movement
  (linear-velocity [this] [this val])
  (angular-velocity [this] [this val])
  ;;Surface
  (restitution [this] [this val])
  (static-friction [this] [this val])
  (dynamic-friction [this] [this val]))

(defprotocol IBounds
  (bounds [this]))

(defprotocol IPolygon
  (rel-points [this] [this val])
  (points [this])
  (rotation-matrix [this] [this val])
  (normals [this]))

(defprotocol ICircle
  (radius [this]))

;; ---------------------------------------------------------------------
;; Adapter

(defprotocol IGraphicsAdapter
  (render [this game])
  (request-animation-frame [this callback]))

;;adapter should discard events it doesn't understand
;; :keyup
;; :keydown
;; :keypress
;; :mousemove
;; :click
;; :dblclick
;; :mousedown
;; :mouseup
;; :mouseenter
;; :mouseleave
;; :touchstart
;; :touchend
;; :touchmove

;; Input Events should look like the following
;; {:type :mousemove
;;  :data {:position [x y]}
;;  :event <native event>}

;; NOTE: all events at this level are container level events

(defprotocol IInputAdapter
  (set-event-handler [this event func])
  (supported-event? [this event-key]))



(defprotocol ISoundAdapter
  (play-sound [this id]))

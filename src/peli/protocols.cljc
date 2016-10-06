(ns peli.protocols)

;; ---------------------------------------------------------------------
;; Base

(defprotocol IInit
  (init [this]))

(defprotocol IIdentity
  (id [this]))

(defprotocl IActive
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
  (gravity [this]))

(defprotocol IGame
  (fps [this])
  (block-size [this] [this new])
  (active-world [this])
  (activate-world [this id])
  (worlds [this])
  (position-impulses [this] [this val])
  (graphics-adapter [this]))


;; ---------------------------------------------------------------------
;; Body

(defprotocol IRenderDepth
  (depth [this]))

(defprotocol IBody
  (draw [this game])
  (shape [this]))

(defprotocol IBodyPhysics
  (apply-physics [this dt]))

(defprotocol ICollisionFilter
  (collidable? [this collision]))

(defprotocol ICollision
  (collide [this collision game]))

(defprotocol IGravityFactor
  (gravity-factor [this]))

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

(defprotocl IBounds
  (bounds [this]))

(defprotocol IFrame
  (extended-bounds [this]))

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
  (draw-polygon [this opts])
  (draw-circle [this opts])
  (draw-rect [this opts])
  (draw-rounded-rec [this opts])
  (draw-sprite [this opts]))

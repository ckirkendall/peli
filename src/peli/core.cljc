(ns peli.core
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go]]))
  (:require [peli.impl.events :as events]
            [peli.impl.game :as game]
            [peli.impl.text :as text]
            [peli.impl.engine :as engine]
            [peli.impl.utils :as utils]
            [peli.impl.physics :as phy]
            [peli.impl.frame :as frame]
            [peli.impl.geometry :as geo]
            [peli.impl.phy-math :as math]
            [peli.protocols :as p]
            #?(:clj [clojure.core.async :refer [go <! timeout]]
               :cljs [cljs.core.async :refer [<! timeout]])))

;; ---------------------------------------------------------------------
;; game control

(defn start [game-atm world-id]
  (reset! engine/running true)
  (game/init-game game-atm world-id)
  (engine/animation-loop game-atm))

(defn stop []
  (reset! engine/running false))

(defn reset [game world-id]
  (stop)
  (Thread/sleep 100)
  (start game world-id))


;; ---------------------------------------------------------------------
;; base constructors

;;text
(def create-dynamic-label text/create-dynamic-label)
(def create-label text/create-label)

;;shapes
(def create-circle geo/create-circle)
(def create-poly geo/create-poly)
(def create-box geo/create-box)

;;base
(defn create-frame [width height]
  (frame/->Frame 0 0 width height))

(defn create-board [width height]
  (frame/->Board width height))

(defn create-game [game-map]
  (game/map->Game game-map))

(defn create-world [world-map]
  (game/map->World world-map))


;; ---------------------------------------------------------------------
;; standard input event handlers

(defn mousemove-global [e game]
  (let [pos (get-in e [:data :position])
        cur-state (p/world-state game)]
    (p/world-state game (assoc cur-state
                               :mouse-local pos
                               :mouse-global (utils/global-position game pos)))))


;; ---------------------------------------------------------------------
;; game events

(def dispatch events/dispatch)
(def schedule events/schedule)
(def reg-event-fx events/reg-event-fx)

;; ---------------------------------------------------------------------
;; Helper functions


(def rotate-to-normal utils/rotate-to-normal)
(def global-position utils/global-position)
(def framed-position utils/framed-position)
(def contains-point geo/contains-point)
(def bounds-overlap? geo/bounds-overlap?)

(def apply-force phy/apply-force)

(def default-gravity phy/default-gravity)

;; ---------------------------------------------------------------------
;; Vector Math

(def dot math/dot)
(def normalize math/normalize)
(def add math/add)
(def add-vr math/add-vr)
(def sub math/sub)
(def mul-vr math/mul-vr)
(def dist math/dist)
(def dist-sqr math/dist-sqr)
(def infinity math/infinity)
(def neg-infinity math/neg-infinity)

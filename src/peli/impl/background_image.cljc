(ns peli.impl.background-image
  (:require [peli.protocols :as p]
            [peli.impl.geometry :as geo]
            [peli.impl.phy-math :refer [infinity]]
            [peli.impl.utils :as utils]))

(defn holder-box [[x y] width height]
  (geo/create-box {:id :holder-box
                   :position [(+ x (/ width 2))
                              (+ y (/ height 2))]
                   :width width
                   :height height
                   :density infinity}))

(defrecord BackgroundImage [id position sprite-id width height shape]
  p/IIdentity
  (id [this] (:id this))

  p/IBody
  (draw [this game]
    (let [pos (utils/framed-position game position)]
      [:sprite {:position pos
                :width width
                :height height
                :sprite-id sprite-id}]))
  (shape [this] (:shape this))
  (shape [this val] this)

  p/ICollisionFilter
  (collidable? [this _] false)

  p/IRenderDepth
  (depth [this] -1000))

(defn create-background-image [position sprite-id width height]
  (map->BackgroundImage
   {:id (name (gensym (str "bg-" sprite-id "-")))
    :position position
    :width width
    :height height
    :sprite-id sprite-id
    :shape (holder-box position width height)}))

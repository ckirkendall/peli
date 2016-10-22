(ns peli.impl.text
  (:require [peli.protocols :as p]
            [peli.impl.geometry :as geo]
            [peli.impl.phy-math :refer [infinity]]))

(defn- holder-shape [id]
  (geo/create-box {:id id
                   :position [0.0 0.0]
                   :width 1
                   :height 1
                   :density infinity}))

(defrecord DynamicLabel [id text-fn position font fill rotation shape]
  p/IIdentity
  (id [this] (:id this))

  p/IBody
  (draw [this game]
    [:text (assoc this :text (text-fn game))])
  (shape [this] (:shape this))
  (shape [this val] (assoc this :shape val))

  p/ICollisionFilter
  (collidable? [this _] false)

  p/IRenderDepth
  (depth [this] 1000))


(defn create-dynamic-label [{:keys [id text-fn position font font-size fill rotation shape]
                             :or {font :sans-serif
                                  font-size 12
                                  fill 0xffffff
                                  rotation 0.0
                                  shape (holder-shape id)}}]
  (map->DynamicLabel {:id id
                      :text-fn text-fn
                      :position position
                      :font font
                      :font-size 12
                      :fill fill
                      :rotation rotation
                      :shape (holder-shape id)}))

(defn create-label [{:keys [text] :as opts}]
  (create-dynamic-label (assoc opts :text-fn (constantly text))))

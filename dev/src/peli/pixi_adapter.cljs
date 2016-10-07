(ns peli.pixi-adapter
  (:require [cljsjs.pixi]
            [peli.protocols :as p]
            [peli.impl.utils :as utils]
            [peli.impl.geometry :as geometry]))



(defn create-stage []
  (new js/PIXI.Container))

(defn create-renderer [width height]
  (js/PIXI.autoDetectRenderer width height nil true))

(defn create-asset-loader [image-urls]
  (new js/PIXI.loaders.AssetLoader (apply array image-urls)))

(defn line-style [ctx {:keys [stroke stroke-width stroke-opacity]
                       :or {stroke 0xcfcfcf
                            stroke-width 1.0
                            stroke-opacity 1.0}}]
  (.lineStyle ctx stroke-width stroke stroke-opacity))

(defn begin-fill [ctx {:keys [fill
                              fill-opacity]
                         :or {fill 0x555555
                              fill-opacity 1.0} :as opts}]
  (.beginFill ctx fill fill-opacity))

(defn end-fill [ctx]
  (.endFill ctx))


(defn draw-polygon [{:keys [position points rotation]
                     :or {rotation 0.0} :as opts}]
  (let [[x y] position
        ctx (-> (js/PIXI.Graphics.)
                (line-style opts)
                (begin-fill opts)
                (.drawPolygon (clj->js (flatten points)))
                end-fill)]
    (set! (.-x ctx) x)
    (set! (.-y ctx) y)
    (set! (.-rotation ctx) rotation)
    ctx))


(defn draw-circle [{:keys [x y radius rotation]
                    :or {rotaiton 0.0} :as opts}]
  (let [ctx (-> (js/PIXI.Graphics.)
                (line-style opts)
                (begin-fill opts)
                (.drawCircle 0 0 radius)
                end-fill
                (.moveTo 0 0)
                (.lineTo radius 0))]
    (set! (.-x ctx) x)
    (set! (.-y ctx) y)
    (set! (.-rotation ctx) rotation)
    ctx))


(defn draw-rect [{:keys [position width height rotation]
                  :or {rotation 0.0} :as opts}]
  (let [[x y] position
        ctx (-> (js/PIXI.Graphics.)
                (line-style opts)
                (begin-fill opts)
                (.drawRect 0 0 width height)
                end-fill)]
    (set! (.-x ctx) (- x (* width 0.5)))
    (set! (.-y ctx) (- y (* height 0.5)))
    (set! (.-rotation ctx) rotation)
    ctx))

(defn draw-rounded-rect [{:keys [position width height radius rotation]
                          :or {rotation 0.0} :as opts}]
  (let [[x y] position
        ctx (-> (js/PIXI.Graphics.)
                (line-style opts)
                (begin-fill opts)
                (.drawRoundedRect 0 0 width height radius)
                end-fill)]
    (set! (.-x ctx) (- x (* width 0.5)))
    (set! (.-y ctx) (- y (* height 0.5)))
    (set! (.-rotation ctx) rotation)
    ctx))


(defn draw-sprite [{:keys [position width height sprite-id
                           rotation]} textures]
  (let [sprite (js/PIXI.Sprite. (get textures sprite-id))
        [x y] position]
    (set! (.-x sprite) (- x (* width 0.5)))
    (set! (.-y sprite) (- y (* height 0.5)))
    (set! (.-width sprite) width)
    (set! (.-height sprite) height)
    (when rotation
      (.set (.anchor sprite) x y)
      (set! (.-rotation rotation)))
    sprite))


(defn draw-text [{:keys [text font fill position]}]
  (let [[x y] position
        msg (js/PIXI.Text. text #js{:font font :fill fill})]
    (set! (.-x msg) x)
    (set! (.-y msg) y)
    msg))

(defn ctx->ctx! [ctx1 ctx2]
  (set! (.-x ctx1) (.-x ctx2))
  (set! (.-y ctx1) (.-y ctx2))
  (set! (.-rotation ctx1) (.-rotation ctx2))
  (when (.-texture ctx2)
    (set! (.-texture ctx1) (.-texture ctx2)))
  ctx1)


(defrecord PixiGraphicsAdapter [renderer stage dom-id textures elements]
  p/IInit
  (init [this {:keys [width height]}]
    (let [renderer (create-renderer width height)
          stage (create-stage)
          dom-el (if dom-id
                   (js/document.getElementId dom-id)
                   js/document.body)]
      (.appendChild dom-el (.-view renderer))
      (assoc this
             :renderer renderer
             :stage stage)))
  p/IGraphicsAdapter
  (render [{:keys [stage renderer] :as this} game]
    (.removeChildren stage)
    (let [frame (p/frame game)
          bodies (sort-by #(p/depth %) (vals (p/bodies game)))]
      (doseq [body bodies]
        (when (geometry/bounds-overlap? (p/shape body) frame)
          (let [nctx (p/draw body game)]
            (.addChild stage nctx))))
      (.render renderer stage)
      this))
  (request-animation-frame [this callback]
    (js/window.requestAnimationFrame callback))
  (draw-polygon [this opts]
    (draw-polygon opts))
  (draw-circle [this opts]
    (draw-circle opts))
  (draw-rect [this opts]
    (draw-rect opts))
  (draw-rounded-rect [this opts]
    (draw-rounded-rect opts))
  (draw-sprite [this opts]
    (draw-sprite opts (:texters this)))
  (draw-text [this opts]
    (draw-text opts)))

(defn create-graphics-adapter [dom-id width height]
  (p/init (map->PixiGraphicsAdapter {:id dom-id}) {:width width :height height}))



(defrecord PixiInputAdapter [stage]
  p/IInit
  (init [this stage]
    (set! (.-interactive stage) true)
    #_(set! (.-interactiveChildren stage) false)
    (assoc this :stage stage))

  p/IInputAdapter
  (set-event-handler [this event func]
    (.on (:stage this) (name event) func)))


(defn create-input-adapter [stage]
  (p/init (PixiInputAdapter. stage) stage))

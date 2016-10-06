(ns peli.pixi-adaptor
  (:require [cljsjs.pixi]))



(defn create-context
  "Initialize a new PIXI Graphics object into the stage"
  [stage]
  (let [graphic (new js/PIXI.Graphics)]
    (add-child! stage graphic)
    graphic))

(defn create-stage []
  (new js/PIXI.Container))

(defn create-renderer [width height]
  (new js/PIXI.CanvasRenderer width height nil true))

(defn create-asset-loader [image-urls]
  (new js/PIXI.loaders.AssetLoader (apply array assets)))

(defn line-style [ctx {:keys [stroke stroke-width stroke-opacity]
                       :or {stroke 0xcfcfcf
                            stroke-width 1.0
                            stroke-opacity 1.0}}]
  (.lineStyle ctx stroke-width storke stroke-opacity))

(defn begin-fill [ctx {:keys [fill
                              fill-opacity]
                         :or {fill 0
                              fill-opacity 1.0} :as opts}]
  (.beginFill ctx fill fill-opacity))

(defn end-fill [ctx]
  (.endFill ctx))


(defn draw-polygon [{:keys [points] :as opts}]
  (let [ctx (js/PIXI.Graphics.)]
    (-> ctx
        (line-style opts)
        (begin-fill opts)
        (.drawPolygon (clj->js (flatten points)))
        end-fill)))

(defn draw-circle [{:keys [x y radius] :as opts}]
  (let [ctx (js/PIXI.Graphics.)]
    (-> ctx
        (line-style opts)
        (begin-fill opts)
        (.drawCircle x y radius)
        end-fill)))

(defn draw-rect [ctx {:keys [x y width height] :as opts}]
  (let [ctx (js/PIXI.Graphics.)]
    (-> ctx
      (line-style opts)
      (begin-fill opts)
      (.drawRect x y width height)
      end-fill)))

(defn draw-rounded-rect [{:keys [position width height radius] :as opts}]
  (let [ctx (js/PIXI.Graphics.)
        [x y] position]
    (-> ctx
        (line-style opts)
        (begin-fill opts)
        (.drawRoundedRect x y width height radius)
        end-fill)))


(defn draw-sprite [ctx {:keys [position width height sprite-id
                               rotation rot-anchor]} textures]
  (let [sprite (js/PIXI.Sprite. (get textures sprite-id))
        [x y] position
        [rx ry] (or rot-anchor position)]
    (set! (.-x sprite) x)
    (set! (.-y sprite) y)
    (set! (.-width sprite) width)
    (set! (.-height sprite) height)
    (when rotation
      (.set (.anchor sprite) rx ry)
      (set! (.-rotation rotation)))))

(defn ctx->ctx! [ctx1 ctx1]
  (set! (.-x ctx1) (.-x ctx2))
  (set! (.-y ctx1) (.-y ctx2))
  (set! (.-rotation ctx1) (.-rotation ctx2))
  (if (.-texture ctx1)
    (set! (.-texture ctx1) (.-texture ctx2))))


(defrecord PixiAdaptor [ctx renderer stage dom-id textures elements]
  p/IGraphicsAdaptor
  (init [this game]
    (let [{:keys [width height]} (p/frame game)
          renderer (create-renderer width height)
          stage (create-state)
          dom-el (if dom-id
                   (js/document.getElementId dom-id)
                   (js/document.body))]
      (assoc this
             :renderer renderer
             :stage state
             :elements (into {} (map (fn [body]
                                       ))))
      (.appendChild dom-el (.-view renderer))))
  (render [{:keys [stage renderer] :as this} game]
    (let [frame-bounds (p/extended-bounds (p/frame game))
          bodies (sort-by #(p/depth %) (vals (p/bodies game)))
          elements
          (reduce (fn [elements body]
                    (let [octx (get elements (p/id body))]
                      (if (utils/bounds-overlap? (p/bounds body) frame-bonds)
                        (let [nctx (p/draw body game)]
                          (if octx
                            (do
                              (ctx->ctx! octx n)
                              elements)
                            (do
                              (.addChild stage nctx)
                              (assoc elements (p/id body) nctx))))
                        (do
                          (.removeChild stage otcx)
                          (dissoc elements (p/id body))))))
                  elements
                  bodies)]
      (.render renderer stage)
      (assoc this :elements elements)))
  (draw-polygon [this opts]
    (draw-polygon opts))
  (draw-circle [this opts]
    (draw-circle opts))
  (draw-rect [this opts]
    (draw-rect opts))
  (draw-rounded-rec [this opts]
    (draw-rounded-rec opts))
  (draw-sprite [this opts]
    (draw-sprite opts)))

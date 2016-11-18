(ns peli.adapters.web-adapter
  (:require [cljsjs.pixi]
            [peli.protocols :as p]
            [peli.impl.utils :as utils]
            [peli.impl.geometry :as geometry]))

;; ---------------------------------------------------------------------
;; Graphics Sub System

(def sprites-loaded? (atom false))

(defn create-stage []
  (new js/PIXI.Container))

(defn create-renderer [width height]
  (js/PIXI.autoDetectRenderer width height nil true))

(defn create-asset-loader [image-urls]
  (new js/PIXI.loaders.AssetLoader (apply array image-urls)))

(defn line-style [ctx {:keys [stroke stroke-width stroke-opacity]
                       :or {stroke 0xcfcfcf
                            stroke-width 2.0
                            stroke-opacity 1.0}}]
  (.lineStyle ctx stroke-width stroke stroke-opacity))

(defn begin-fill [ctx {:keys [fill
                              fill-opacity]
                         :or {fill 0x555555
                              fill-opacity 1.0} :as opts}]
  (.beginFill ctx fill fill-opacity))

(defn end-fill [ctx]
  (.endFill ctx))


(defn draw-polygon [{:keys [position points rotation] :as opts}]
  (let [[x y] position
        ctx (-> (js/PIXI.Graphics.)
                (line-style opts)
                (begin-fill opts)
                (.drawPolygon (clj->js (flatten points)))
                end-fill)]
    (set! (.-x ctx) x)
    (set! (.-y ctx) y)
    (when rotation
      (set! (.-rotation ctx) rotation))
    ctx))


(defn draw-circle [{:keys [position radius rotation]
                    :or {rotaiton 0.0} :as opts}]
  (let [[x y] position
        ctx (-> (js/PIXI.Graphics.)
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

(defn draw-sprite [{:keys [position width height sprite-id
                           rotation pivot] :as opts} sprites]
  (when @sprites-loaded?
    (let [texture (.-texture (aget js/PIXI.loader.resources (get sprites sprite-id)))
          sprite (js/PIXI.Sprite. texture)
          [x y] position
          [pvx pvy] (or pivot position)
          p-point (js/PIXI.Point. 0.5 0.5)
          anchor (.-anchor sprite)]

      (set! (.-x sprite) x #_(+ x (/ width 2)))
      (set! (.-y sprite) y #_(+ y (/ height 2)))
      (set! (.-width sprite) width)
      (set! (.-height sprite) height)
      (when rotation
        (set! (.-x anchor) 0.5)
        (set! (.-y anchor) 0.5)
        (set! (.-rotation sprite) rotation))
      sprite)))


(defn draw-text [{:keys [text font font-size fill position]}]
  (let [[x y] position
        font-str (str font-size "px " (name font))
        msg (js/PIXI.Text. text #js{:font font-str :fill fill})]
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


(defn draw-container [{:keys [position rotation pivot]
                       :or {pivot position}} children]
  (let [group (new js/PIXI.Container)]
    (when rotation
      (let [[px py] pivot
            p-point (js/PIXI.Point. px py)]
        (set! (.-pivot group) p-point)
        (set! (.-rotation group) rotation)))
    (doseq [child children]
      (.addChild child))
    group))


(def tag->draw
  {:poly draw-polygon
   :circle draw-circle
   :sprite draw-sprite
   :text draw-text})


(defn draw-hiccup [adapter [tag & opts]]
  (cond
    (= tag :g)
    (let [[opts & children] opts]
      (draw-container opts (map draw-hiccup children)))
    (= tag :sprite)
    (draw-sprite (first opts) (:sprites adapter))
    (contains? tag->draw tag)
    (let [draw-fn (tag->draw tag)]
      (draw-fn (first opts)))))


(defn calculate-frame-scale [canvas {:keys [width height]}]
  (let [w (.-width canvas)
        h (.-height canvas)
        x-ratio (if w (/ w width) width)
        y-ratio (/ h height)]
    (min x-ratio y-ratio)))

(defn scale-stage [renderer stage {:keys [width height] :as frame}]
  (let [frame-scale (calculate-frame-scale renderer frame)
        x-offset (/ (- (.-width renderer)
                       (* frame-scale width)) 2)
        y-offset (/ (- (.-height renderer)
                       (* frame-scale height)) 2)]
    (set! (.-x stage) x-offset)
    (set! (.-y stage) y-offset)
    (set! (.-scale stage) (js/PIXI.Point. (double frame-scale)
                                          (double frame-scale)))))

(defn detect-resize [dom-el renderer]
  (fn [e]
    (js/console.log js/window)
    (let [[width height] (if (= js/document.body
                                dom-el)
                           [(double (.-innerWidth js/window))
                            (double (.-innerHeight js/window))]
                           (let [rect (.getBoundedClientRect dom-el)]
                             [(double (.-width rect))
                              (double (.height rect))]))]
      (println width height)
      (.resize renderer width height))))

(def cur-state (atom nil))

(defrecord PixiGraphicsAdapter [renderer stage dom-id sprites loader elements]
  p/IInit
  (init [this {:keys [width height sprites]}]
    (reset! sprites-loaded? false)
    (let [renderer (or (:renderer this)
                       (create-renderer width height))
          stage (or (:stage this)
                    (create-stage))
          dom-el (if (:dom-id this)
                   (js/document.getElementId (:dom-id this))
                   js/document.body)
          resize-fn (detect-resize dom-el renderer)]
      (resize-fn nil)
      (set! (.-onresize js/window) resize-fn)
      (doseq [[id url] sprites]
        (.add js/PIXI.loader url))
      (.load js/PIXI.loader #(do
                               (reset! sprites-loaded? true)
                               (println "sprites loaded")))
      (if (.hasChildNodes dom-el)
        (.replaceChild dom-el (.-view renderer) (.-firstChild dom-el))
        (.appendChild dom-el (.-view renderer)))
      (assoc this
             :sprites sprites
             :renderer renderer
             :stage stage)))
  p/IGraphicsAdapter
  (render [{:keys [stage renderer] :as this} game]
    (reset! cur-state game)
    (.removeChildren stage)
    (let [frame (p/frame game)
          bodies (sort-by #(p/depth %) (vals (p/bodies game)))]
      (scale-stage renderer stage frame)
      (doseq [body bodies]
        (when (geometry/bounds-overlap? (p/shape body) frame)
          (let [nctx (->> (p/draw body game)
                          (draw-hiccup this))]
            (when nctx
              (.addChild stage nctx)))))
      (.render renderer stage)
      this))
  (request-animation-frame [this callback]
    (js/window.requestAnimationFrame callback)))

(defn create-graphics-adapter [dom-id opts]
  (p/init (map->PixiGraphicsAdapter {:id dom-id}) opts))

;; ---------------------------------------------------------------------
;; Event Sub System

;TODO - touch and multi-touch
(def single-position-events
  #{:mouseenter :mouseleave :mousemove :click :dbclick})

(def key-events
  #{:keyup :keydown :keypress})

(defn transform-event [event renderer]
  (let [type (keyword (.-type event))]
    (cond
      (single-position-events type)
      (let [w (.-width renderer)
            h (.-height renderer)
            game @cur-state
            {:keys [width height] :as frame} (p/frame game)
            scale-ratio (calculate-frame-scale renderer frame)
            offset-x (/ (- w (* scale-ratio width)) 2.0)
            offset-y (/ (- h (* scale-ratio height)) 2.0)
            point (-> event .-data .-global)
            pos [(/ (- (double (.-x point)) offset-x) scale-ratio)
                 (/ (- (double (.-y point)) offset-y) scale-ratio)]]
        (when (= :click type)
          (println w h scale-ratio pos offset-y offset-x))
        {:type type
         :data {:position pos
                :ctrl-key (.-ctrlKey event)
                :shift-key (.-shiftKey event)
                :alt-key (.-altKey event)
                :meta-key (.-metaKey event)}
         :event event})
      (key-events type)
      (let [key-code (.-keyCode event)]
        {:type type
         :data {:key-code key-code
                :ctrl-key (.-ctrlKey event)
                :shift-key (.-shiftKey event)
                :alt-key (.-altKey event)
                :meta-key (.-metaKey event)}
         :event event})

      :else
      {:type type
       :event event})))

(defrecord PixiInputAdapter [stage renderer]
  p/IInit
  (init [this {:keys [stage renderer]}]
    (set! (.-interactive stage) true)
    #_(set! (.-interactiveChildren stage) false)
    (assoc this
           :stage stage
           :renderer renderer))

  p/IInputAdapter
  (set-event-handler [this event func]
    (js/console.log "ADD EVENT: " event)
    (let [event-fn #(-> % (transform-event (:renderer this)) func)]
      (if (key-events event)
        (js/document.addEventListener (name event) event-fn)
        (.on (:stage this) (name event) event-fn)))

    this)
  (supported-event? [this event-type] true))



(defn create-input-adapter [{:keys [stage renderer] :as opts}]
  (p/init (PixiInputAdapter. stage renderer) opts))

;; ---------------------------------------------------------------------
;; Sound Sub System

(defrecord PixiSoundAdapter [sounds]
  p/IInit
  (init [this sounds-to-load]
    (let [sounds (reduce (fn [sounds [id url]]
                           (assoc sounds id (js/Audio. url)))
                         {}
                         sounds-to-load)]
      (assoc this :sounds sounds)))

  p/ISoundAdapter
  (play-sound [this id]
    (.play (get sounds id))))

(defn create-sound-adapter [sounds]
  (p/init (PixiSoundAdapter. nil) sounds))


;; ---------------------------------------------------------------------
;; Initialize or reinitialize adapters

(defn initialize-game [game dom-id]
  (let [sounds (p/sounds game)
        sprites (p/sprites game)
        sound-adapter (if (p/sound-adapter game)
                        (p/init (p/sound-adapter game) sounds)
                        (create-sound-adapter sounds))
        {:keys [width height]} (or (p/frame game)
                                   (p/board game))
        gfx-opts {:width width
                  :height height
                  :sprites sprites}
        gfx-adapter  (if (p/graphics-adapter game)
                       (p/init (p/graphics-adapter game) gfx-opts)
                       (create-graphics-adapter dom-id gfx-opts))
        input-adapter (if (p/input-adapter game)
                        (p/init (p/input-adapter game)
                                gfx-adapter)
                        (create-input-adapter gfx-adapter))]
    (-> game
        (p/sound-adapter sound-adapter)
        (p/graphics-adapter gfx-adapter)
        (p/input-adapter input-adapter))))


;; ---------------------------------------------------------------------
;; Primary Entry Point

(defn adapter-config [dom-id]
  (reify p/IInit
    (init [this game]
      (initialize-game game dom-id))))

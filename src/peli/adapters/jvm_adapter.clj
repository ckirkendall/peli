(ns peli.adapters.jvm-adapter
  (:use seesaw.core
        seesaw.graphics
        seesaw.color
        seesaw.font)
  (:import [javax.imageio ImageIO]
           [java.awt RenderingHints])
  (:require [peli.impl.phy-math :as math]
            [peli.impl.geometry :as geometry]
            [peli.adapters.sound-helper :as sound]
            [peli.protocols :as p]
            [clojure.java.io :as io]
            [clojure.core.async :as async :refer [thread <!! chan put! timeout]]) )

;; ---------------------------------------------------------------------
;; Graphics Sub System

; This first handler uses raw Java2D calls to do painting. See (paint2) below
; for an example of using Seesaw's simple shape support.
(def colors [(color 224 224 0 128) (color 224 0 224 128)])

(def color1 (atom (color 224 224 0 128)))


(defn line-style [{:keys [stroke-width]
                   :or {stroke-width 2.0}}]
  (stroke :width stroke-width))



(defn draw-polygon [ctx {:keys [position points rotation stroke fill]
                         :or {stroke 0xcfcfcf
                              fill 0x555555} :as opts}]
  (let [stroke (format "#%X" stroke)
        fill (format "#%X" fill)
        start-trans (.getTransform ctx)
        [x y] position
        poly (apply polygon (map (partial math/add position) points))
        style {:stroke (line-style opts)
               :foreground (color stroke)
               :background (color fill)}]
    (when rotation
      (.rotate ctx rotation x y))
    (.. (draw ctx poly style)
        (setTransform start-trans))))


(defn draw-circle [ctx {:keys [position radius rotation stroke fill]
                        :or {stroke 0xcfcfcf
                             fill 0xffffff} :as opts}]
  (let [stroke (format "#%06X" stroke)
        fill (format "#%06X" fill)
        start-trans (.getTransform ctx)
        [x y] position
        cir (circle x y radius)
        lin (line x y (+ x radius) y)
        style {:stroke (line-style opts)
               :foreground (color stroke)
               :background (color fill)}]

    (when rotation
      (.rotate ctx rotation x y))
    (-> (draw ctx cir style)
        (draw lin style)
        (.setTransform start-trans))))


(defn draw-text [ctx {:keys [text font-size fill position]
                      :or {fill 0x0}
                      my-font :font}]
  (let [fill (format "#%06X" fill)
        [x y] position
        style {:font (font :name my-font :size font-size)
               :background (color "white" #_fill)
               :foreground (color "white" #_fill)}
        msg (string-shape x y text)]
    (draw ctx msg style)))


(defn draw-sprite [ctx resources {:keys [position width height sprite-id
                                         rotation pivot] :as opts}]
  (let [img (get resources sprite-id)
        [x y] position
        [px py] pivot
        start-trans (.getTransform ctx)]
    (when rotation
      (.rotate ctx rotation px py))
    (.drawImage ctx img x y width height (::component resources))
    (.setTransform ctx start-trans)))


(declare draw-hiccup draw-container)

(def tag->draw
  {:poly draw-polygon
   :circle draw-circle
   #_#_:sprite draw-sprite
   :text draw-text
   :g draw-container })

(defn draw-container [ctx resources {:keys [position rotation pivot]
                          :or {pivot position}} children]
  (let [[x y] position
        [px py] pivot
        start-trans (.getTransform ctx)]
    (when rotation
      (.rotate ctx rotation px py))
    (.translate ctx x y)
    (doseq [child children]
      (draw-hiccup ctx resources child))
    (.setTransform start-trans)))

(defn draw-hiccup [ctx resources [tag & opts]]
  (cond
    (= tag :g)
    (let [[opts & children] opts]
      (draw-container ctx resources opts children))

    (= tag :sprite)
    (draw-sprite ctx resources (first opts))

    (contains? tag->draw tag)
    (let [draw-fn (tag->draw tag)]
      (draw-fn ctx (first opts)))))


(def cur-state (atom nil))

(defn calculate-frame-scale [canvas {:keys [width height]}]
  (let [w (.getWidth canvas)
        h (.getHeight canvas)
        _ (println width height w h)
        y-ratio (if w (/ w width) width)
        x-ratio (/ h height)]
    (min x-ratio y-ratio)))

(defn render-state-fn [resources]
  (fn render-state [c g]
    (try
      (let [game @cur-state]
        (when game
          (let [{:keys [width height] :as frame} (p/frame game)
                scale-ratio (calculate-frame-scale c frame)
                bodies (sort-by #(p/depth %) (vals (p/bodies game)))
                img (.createImage c width height)
                img-gfx (.createGraphics img)
                img-width (* scale-ratio width)
                img-height (* scale-ratio height)
                img-x (/ (- (.getWidth c) img-width) 2.0)
                img-y (/ (- (.getHeight c) img-height) 2.0)]
            (.setRenderingHint img-gfx
                             RenderingHints/KEY_ANTIALIASING
                             RenderingHints/VALUE_ANTIALIAS_ON)
            (.setRenderingHint g
                             RenderingHints/KEY_ANTIALIASING
                             RenderingHints/VALUE_ANTIALIAS_ON)
            (doseq [body bodies]
              (when (geometry/bounds-overlap? (p/shape body) frame)
                (draw-hiccup img-gfx (assoc resources ::component c) (p/draw body game))))
            (.drawImage g img img-x img-y img-width img-height c))))
      (catch Exception e
        (.printStackTrace e)))))


(defn start-render-thread [canvas input-chan]
  (async/thread
    (loop []
      (let [render-fn (<!! input-chan)]
        (try (render-fn)
             (catch Exception e
               (println :ERROR e)
               (.printStackTrace e)))
        (<!! (timeout 5))
        (recur)))))


(defn load-sprites [sprites]
  (reduce (fn [r [id url]]
            (let [img (-> url
                          io/resource
                          io/file
                          ImageIO/read)]
              (assoc r id img)))
          {}
          sprites))

(defrecord JavaGraphicsAdapter [render-frame render-canvas input-chan resources]
  p/IInit
  (init [this {:keys [width height sprites]}]
    (let [input-chan (chan 1)
          resources (load-sprites sprites)
          tmp-canvas (canvas
                       :id :canvas
                       :background "#000000"
                       :focusable? true
                       :size [width :by height]
                       :paint (render-state-fn resources))
          frame (frame :title "Hello",
                       :content "Hello, Seesaw",
                       :size [width :by height]
                       :content tmp-canvas)]
      (show! frame)
      (println :CANVAS
               (.getWidth tmp-canvas)
               (.getHeight tmp-canvas)
               (.getWidth frame)
               (.getHeight frame))
      (request-focus! tmp-canvas)
      (start-render-thread canvas input-chan)
      (assoc this
             :resources resources
             :render-frame frame
             :render-canvas tmp-canvas
             :input-chan input-chan)))
  p/IGraphicsAdapter
  (render [{:keys [render-canvas] :as this} game]
    (try
      (reset! cur-state game)
      (repaint! render-canvas)
      (catch Exception e
        (.printStackTrace e)))
    this)
  (request-animation-frame [{:keys [input-chan]} callback]
    (put! input-chan callback)))


(defn create-graphics-adapter [opts]
  (p/init (map->JavaGraphicsAdapter {}) opts))

;; ---------------------------------------------------------------------
;; Event Sub System

(def pevent->jevent
  {:click :mouse-clicked
   :mousemove :mouse-moved
   :keypress :key-typed
   :keyup :key-released
   :keydown :key-pressed})

(def single-position-events
  #{:mouseenter :mouseleave :mousemove :click :dbclick})

(def key-events
  #{:keyup :keydown :keypress})

(defn transform-event [canvas type event]
  (cond
    (single-position-events type)
    (let [w (.getWidth canvas)
          h (.getHeight canvas)
          game @cur-state
          {:keys [width height] :as frame} (p/frame game)
          scale-ratio (calculate-frame-scale canvas frame)
          offset-x (/ (- w (* scale-ratio width)) 2)
          offset-y (/ (- h (* scale-ratio height) 2))
          point (-> event (.getPoint))
          pos [(/ (- (double (.-x point)) offset-x) scale-ratio)
               (/ (- (double (.-y point)) offset-y) scale-ratio)]]
      {:type type
       :data {:position pos
              :ctrl-key (.isControlDown event)
              :shift-key (.isShiftDown event)
              :alt-key (.isAltDown event)
              :meta-key (.isMetaDown event)}
       :event event})
    (key-events type)
    (let [key-code (.getKeyCode event)]
      {:type type
       :data {:key-code key-code
              :ctrl-key (.isControlDown event)
              :shift-key (.isShiftDown event)
              :alt-key (.isAltDown event)
              :meta-key (.isMetaDown event)}
       :event event})

    :else
    {:type type
     :event event}))


(defrecord JavaInputAdapter [render-canvas]
  p/IInit
  (init [this {:keys [render-canvas]}]
    (assoc this :render-canvas render-canvas))

  p/IInputAdapter
  (set-event-handler [this event func]
    (let [{:keys [render-canvas]} this]
      (listen render-canvas
              (pevent->jevent event)
              (fn [e]
                (func (transform-event render-canvas event e))))
      this))
  (supported-event? [this event-type]
    ((set (keys pevent->jevent)) event-type)))


(defn create-input-adapter [graphics-adapter]
  (p/init (JavaInputAdapter. graphics-adapter) graphics-adapter))

;; ---------------------------------------------------------------------
;; Sound Sub System

(defrecord JavaSoundAdapter [sounds]
  p/IInit
  (init [this sounds-to-load]
    (assoc this :sounds sounds-to-load))

  p/ISoundAdapter
  (play-sound [this id]
    (sound/play-sound (get (:sounds this) id))))

(defn create-sound-adapter [sounds]
  (p/init (JavaSoundAdapter. nil) sounds))


;; ---------------------------------------------------------------------
;; Initialize or reinitialize adapters

(defn initialize-game [game]
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
                       (create-graphics-adapter gfx-opts))
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

(defn adapter-config []
  (reify p/IInit
    (init [this game]
      (initialize-game game))))
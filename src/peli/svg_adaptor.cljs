(ns peli.svg-adaptor
  (:require-macros
   [cljs.core.async.macros :refer (go go-loop)])
  (:require
   [peli.engine :as peli]
   [cljs.core.async :refer (timeout put! chan)]
   [reagent.core :as reagent :refer [atom cursor]]
   [clojure.set :as s]
   [peli.time-debugger :as d]
   [clojure.data :as data :refer [diff]]))


(def debug-flag (atom false))

(declare step-action draw-world)

(defn get-entity-cursor [data-atm id]
  (cursor data-atm [:active-world :registry id]))

(defn svg-game [data]
  (let [data-atm (atom data)
        debug-state (atom {})
        frame-cursor (cursor data-atm [:active-world :frame])
        board-cursor (cursor data-atm [:active-world :board])
        state-cursor (cursor data-atm [:state])
        solids-cursor (cursor data-atm [:active-world :solids])
        characters-cursor (cursor data-atm [:active-world :characters])
        framed-cursor (cursor data-atm [:active-world :framed])
        overlays-cursor (cursor data-atm [:active-world :overlays])
        entity-cursors (memoize (partial get-entity-cursor data-atm))]
    (specify! data-atm
      peli/IGame
      (-run-state [this]
        (get-in @data-atm [:active-world :run-state]))
      (-pause-game [this]
        (swap! data-atm assoc-in [:active-world :run-state] :paused)
        this)
      (-unpause-game [this]
        (swap! data-atm assoc-in [:active-world :run-state] :running)
        this)
      (-fps [this] 60)
      (-sprites [this] (get-in @data-atm [:active-world :sprites]))
      (-sounds [this] (get-in @data-atm [:active-world :sounds]))
      (-frame [this] @frame-cursor)
      (-board [this] @board-cursor)
      (-block-size [this] 50)
      (-state [this] @state-cursor)
      (-solids [this] @solids-cursor)
      (-charaters [this] @characters-cursor)
      (-entity [this id]
        (if-let [cur (entity-cursors id)]
          @cur
          (js/console.error "Entity not found:"
                            (pr-str id) " in "
                            (pr-str (keys (get-in @data-atm [:active-world :registry])))) ))
      (-worlds [this] (:worlds data))
      (-world [this id] (get-in data [:worlds id]))
      (-overlays [this] @overlays-cursor)
      (-framed-character [this] (peli/entity this @framed-cursor))
      (-key-actions [this world-id] (get-in data [:worlds world-id :key-actions]))
      (-update-frame [this func] (swap! frame-cursor func) this)
      (-update-state [this func] (swap! state-cursor func) this)
      (-collision-matrix [this] (:collision-matrix @data-atm))
      (-set-collision-matrix [this matrix]
        (swap! data-atm assoc :collision-matrix matrix)
        this)
      (-switch-worlds [this world-id]
        (swap! data-atm (fn [game]
                          (let [world (get-in game [:worlds world-id])]
                            (assoc game :active-world world))))
        this)
      (-update-entity [this id func]
        (swap! (entity-cursors id) func)
        this)
      (-hide-entity [this id]
        (swap! (entity-cursors id) assoc :hidden true)
        this)
      (-show-entity [this id]
        (swap! (entity-cursors id) assoc :hidden false)
        this)
      (-init-world [this] this)
      (-step [this ch] (step-action this ch) this)
      (-initial-draw [this ch target-id]
        (reagent/render-component
         [draw-world this ch]
         (js/document.getElementById target-id)))
      (-debug [this]
        (if (= (:mode @debug-state) :debug)
          (d/start-record debug-state)
          (d/start-debug debug-state))
        (swap! debug-state update :hidden not)
        this)

      d/IDebugAdaptor
      (-transform [this event]
        (update event :state deref))
      (-display [this {prev-event :event} {cur-event :event}]
        (let [[removed added] (diff (:state prev-event) (:state cur-event))]
          [:div {:id "svg-event"}
           [:div [:label "action"]
            [:span (pr-str (get-in cur-event [:event :action]))]]
           [:div [:label "args"] [:span (pr-str (get-in cur-event [:event :args]))]]
           [:div [:label "added"] [:span (pr-str added)]]
           [:div [:label "removed"] [:span (pr-str removed)]]]))
      (-reset-state! [this {:keys [event]}]
        (reset! this (:state event)))
      (-init-debugger-state [this defaults]
        (swap! debug-state #(merge defaults %))
        debug-state))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; COMMON BUIDLING MATERIALS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn rounded-rect [fill width height x y radii]
  (let [[ul ur lr ll] (or radii [0 0 0 0])]
      [:path {:d (str "M" (+ x ul) "," y
                      "h" (- width ul ur)
                      "a" ur "," ur " 0 0 1 " ur "," ur
                      "v" (- height ur lr)
                      "a" lr "," lr " 0 0 1 " (- lr) "," lr
                      "h" (- (+ lr ll) width)
                      "a" ll "," ll " 0 0 1 " (- ll) "," (- ll)
                      "v" (- (+ ul ll) height)
                      "a" ul "," ul " 0 0 1 " ul "," (- ul)
                      "z")
              :fill fill}]))


(defrecord Block [id fill width height x y radii]
  peli/Pen
  (draw [this game ch]
    (rounded-rect fill width height x y radii)))


(defrecord TextPrompt [id width height text hidden? options]
  peli/Pen
  (draw [this game ch]
    (when-not (:hidden? this)
      (let [[x y] [(/ (- (:width (peli/frame game)) width) 2)
                   (/ (- (:height (peli/frame game)) height) 2)]
            [ul ur lr ll] [5 5 5 5]]
        [:g
         (rounded-rect "#dfdfdf" width height x y [5 5 5 5])
         [:text {:style {:font (:font options "15px Arial")
                         :stroke "#6666dd"
                         :font-color (:font-color options "#000099")}
                 :x (+ x 22)
                 :y (+ y 27)}
          text]]))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Actions
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(defn step-action [game ch]
  (cond
    (= (peli/run-state game) :paused) ;;show prompts
    (peli/adjust-frame game)

    :else
    (-> game
        (peli/run-physics ch)
        (peli/adjust-frame))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Draw
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn create-sprite-defs [sprites]
  [:defs
   (for [[key {:keys [img width height x y]}] sprites]
     [:pattern {:key key :id (name key) :width width :height height}
      [:image {:xlinkHref img :x (or x 0) :y (or y 0)
               :width  width :height height}]])])


(defn draw-body [game id ch]
  (let [body (peli/entity game id)]
    (when-not (:hidden body)
      [peli/draw body game ch])))


(defn draw-solids [game ch]
  (let [bodies (peli/solids game)]
    [:g
     (for [body-id bodies]
       [:g {:key body-id}
        [draw-body game body-id ch]])]))

(defn draw-characters [game ch]
  (let [bodies (peli/characters game)]
    [:g
     (for [body-id bodies]
       [:g {:key body-id}
        [draw-body game body-id ch]])]))

(defn draw-overlays [game ch]
  (let [bodies (peli/overlays game)]
    [:g {:key :overlays}
     (for [body-id bodies]
       [:g {:key body-id}
        [draw-body game body-id ch]])]))

(defn draw-world [game ch]
  (let [state (peli/state game)
        board (peli/board game)
        overlays (peli/overlays game)
        sounds (peli/sounds game)
        {:keys [x y width height]} (peli/frame game)]
    [:div
     [:span
      (for [[key url] sounds]
        [:audio {:key key :id (name key) :src url}])]
     [:svg {:width width
            :height height}
      [create-sprite-defs (peli/sprites game)]
      [:rect {:fill (:color board)
              :x 0 :y 0
              :width width
              :height height}]
      [:g {:transform (str "translate(" (* -1 x) "," (* -1 y) ")")}
       [draw-solids game ch]
       [draw-characters game ch]
       [draw-overlays game ch]]]]))

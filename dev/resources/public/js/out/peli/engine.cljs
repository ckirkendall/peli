(ns peli.engine
  (:require-macros
   [cljs.core.async.macros :refer (go go-loop)])
  (:require
   [cljs.core.async :refer (timeout put! chan)]
   [reagent.core :as reagent :refer [atom]]
   [clojure.set :as s]
   [clojure.data :refer [diff]]
   [cljs.pprint :refer [pprint]]))

(enable-console-print!)
(declare send-action)

(declare overlap?)

(defonce debug-flag (atom false))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; GAME DATA STRUCTURE
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(defprotocol IGame
  (-run-state [this])
  (-pause-game [this])
  (-unpause-game [this])
  (-fps [this])
  (-sprites [this])
  (-sounds [game])
  (-frame [this])
  (-board [this])
  (-block-size [this])
  (-state [this])
  (-solids [this])
  (-charaters [this])
  (-entity [this id])
  (-worlds [this])
  (-world [this id])
  (-overlays [this])
  (-framed-character [this])
  (-key-actions [this world-id])
  (-update-frame [this func])
  (-update-state [this func])
  (-collision-matrix [this])
  (-set-collision-matrix [this matrix])
  (-switch-worlds [this world-id])
  (-update-entity [this id func])
  (-hide-entity [this id])
  (-show-entity [this id])
  (-init-world [this])
  (-step [this ch])
  (-initial-draw [this ch target-id])
  (-debug [this]))

(defn run-state [game] (-run-state game))
(defn pause-game [game] (-pause-game game))
(defn unpause-game [game] (-unpause-game game))
(defn fps [game] (-fps game))
(defn sprites [game] (-sprites game))
(defn sounds [game] (-sounds game))
(defn frame [game] (-frame game))
(defn board [game] (-board game))
(defn block-size [game] (-block-size game))
(defn state [game] (-state game))
(defn solids [game] (-solids game))
(defn characters [game] (-charaters game))
(defn entity [game id] (-entity game id))
(defn worlds [game] (-worlds game))
(defn world [game id] (-world game id))
(defn overlays [game] (-overlays game))
(defn- framed-character [game] (-framed-character game))
(defn- update-frame [game func] (-update-frame game func))
(defn- collision-matrix [game] (-collision-matrix game))
(defn- set-collision-matrix [game matrix] (-set-collision-matrix game matrix))
(defn- update-state [game func] (-update-state game func))
(defn- switch-worlds [game world-id] (-switch-worlds game world-id))
(defn- update-entity [game id func] (-update-entity game id func))
(defn- hide-entity [game id] (-hide-entity game id))
(defn- show-entity [game id] (-show-entity game id))
(defn- init-world [game] (-init-world game))
(defn- step [game ch] (-step game ch))
(defn- key-actions [game world-id] (-key-actions game world-id))
(defn- initial-draw [game ch target-id] (-initial-draw game ch target-id))
(defn debug [game] (-debug game))


(defrecord World [board
                  frame
                  solids
                  characters
                  overlays
                  framed
                  registry
                  sprites
                  sounds
                  key-actions
                  run-state])

(defrecord Game [worlds active-world state])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; PROTOCOLS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defprotocol Gravity
  (gravity [this game ch]))

(defprotocol Physics
  (physics [this time-diff game ch]))

(defprotocol Pen
   (draw [this game ch]))

(defprotocol Collision
   (collide [this body game ch]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; DEFAULT IMPLS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(extend-protocol Physics
   object
   (physics [this time-diff game ch] this))

(extend-protocol Gravity
   object
   (gravity [this game ch] this))

(extend-protocol Pen
   object
   (draw [this game ch] this))

(extend-protocol Collision
   object
   (collide [this body ch game] this))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; HELPER FUNCTIONS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn overlap? [body1 body2]
  (let [{:keys [x y width height]} body1
        {x2 :x y2 :y h2 :height w2 :width} body2
        [lx ly] [(+ x width) (+ y height)]
        [lx2 ly2] [(+ x2 w2) (+ y2 h2)]]
    (and (> lx x2) (<= x lx2)
         (> ly y2) (<= y ly2))))


(defn check-bounds [n offset min max]
 (cond
   (< n min) min
   (> (+ n offset) max) (- n (- (+ n offset) max))
   :else n))


(defn translate-coords [obj frame]
    (assoc obj :x (- (:x obj) (:x frame))
	           :y (- (:y obj) (:y frame))))


(defn apply-gravity
  ([obj] (apply-gravity obj 0.3 -5))
  ([obj gravity t-velocity]
   (let [vy (:vy obj)]
     (assoc obj :vy (if (> vy t-velocity)
                      (- vy gravity)
                      vy)))))


(defn apply-physics
  ([obj game] (apply-physics obj game 0))
  ([obj game time-diff] ;;TODO - support time-diff
   (let [board (board game)
         {:keys [height width x y vx vy]} obj]
     (assoc obj :x (check-bounds (+ x vx) width 0 (:width board))
            :y (check-bounds (- y vy) height 0 (:height board))))))


(defn collide-action [{:keys [height width x y vx vy] :as body1}
                      {x2 :x y2 :y h2 :height w2 :width :as body2}
                      actions]
  (let [ox (- x vx)
        oy (+ y vy)
        ox2 (- x2 (get body2 :vx 0))
        oy2 (+ y2 (get body2 :vy 0))
        [lx ly] [(+ ox width) (+ oy height)]
        [lx2 ly2] [(+ ox2 w2) (+ oy2 h2)]]
    (cond-> body1
     (and (<= ly oy2) (:bottom actions)) ((:bottom actions))
     (and (<= lx ox2) (:right actions)) ((:right actions))
     (and (>= oy ly2) (:top actions)) ((:top actions))
     (and (>= ox lx2) (:left actions)) ((:left actions))
     (and (:any actions)
          (or (<= ly oy2) (<= lx ox2)
              (>= oy ly2) (>= ox lx2))) ((:any actions)))))


(defn collide-solid [{:keys [height width x y vx vy] :as body1}
                     {x2 :x y2 :y h2 :height w2 :width :as body2}]
  (collide-action body1 body2
    {:bottom #(assoc % :y (- y2 height 0.1) :vy 0)
     :right #(assoc % :x (- x2 width 0.1))
     :top #(assoc % :y (+ y2 h2 0.1) :vy 0)
     :left #(assoc % :x (+ x2 w2 0.1))}))


(defn matrix-bounds [block-size {:keys [x y width height]}]
  (let [col (Math/floor (/ x block-size))
        row (Math/floor (/ y block-size))
        max-col (Math/floor (/ (+ x width) block-size))
        max-row (Math/floor (/ (+ y height) block-size))]
    [col row max-col max-row]))


(defn add-item-to-matrix [matrix block-size {:keys [id] :as item}]
  (let [[col row max-col max-row] (matrix-bounds block-size item)]
    (reduce (fn [m row]
              (reduce (fn [m col]
                        (update-in m [row col] (fnil conj #{}) id))
                      m
                      (range col (inc max-col))))
            matrix
            (range row (inc max-row)))))


(defn print-item-location [matrix block-size id]
  (doseq [row (range (count matrix))]
    (doseq [col (range (count (first matrix)))]
      (when (get (get-in matrix [row col]) id)
        (println row col {:x (* col block-size) :y (* row block-size)})))))


(defn add-items-to-matrix [matrix block-size items]
  (reduce (fn [m item]
            (add-item-to-matrix m block-size item))
          matrix
          items))


(defn build-matrix [block-size width height]
  (let [num-cols (Math/floor (/ width block-size))
        num-rows (Math/floor (/ height block-size))]
    (mapv (fn [row]
            (mapv (fn [col] nil) (range num-cols)))
          (range num-rows))))


(defn init-collision-matrix [game]
  (let [block-size (block-size game)
        {:keys [width height]} (board game)
        solids (solids game)
        items (map #(entity game %) solids)
        matrix (build-matrix block-size width height)]
    (add-items-to-matrix matrix block-size items)))


(defn generate-pairs [[el & next]]
  (if (empty? next) #{}
      (into (generate-pairs next)
            (map #(do #{el %}) next))))


(defn generate-collision-list [matrix block-size expanded-frame]
  (let [[col row max-col max-row] (matrix-bounds block-size
                                                 expanded-frame)])
  (apply s/union
    (for [row matrix
          items row]
      (generate-pairs (seq items)))))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; MAIN ENGINE
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn play-sound [id]
  (.play (.getElementById js/document id)))


(defn replace-entities [game chars]
  (reduce (fn [g char]
            (update-entity g (:id char) (fn [_] char)))
          game
          chars))


(defn handle-collision [ch game pair]
  (let [[b1 b2] (map (partial entity game) pair)]
     (if (overlap? b1 b2)
       (replace-entities game
                         [(collide b1 b2 game ch)
                          (collide b2 b1 game ch)])
       game)))


(defn run-physics [game ch]
  (let [{fx :x fy :y  fw :width fh :height} (frame game)
        nx (- fx (/ fw 2))
        nw (* fw 2)
        ny (- fy (/ fh 2))
        nh (* fh 2)
        expanded-frame {:x nx :y ny :width nw :height nh}
        nbodies   (->> (characters game)
                       (map (partial entity game))
                       (filter #(and (overlap? % expanded-frame)
                                     (not (:hidden %))))
                       (map #(-> %
                                 (gravity game ch)
                                 (physics nil game ch)))) ;;TODO - timediff
        coll-matrix (add-items-to-matrix (collision-matrix game)
                                         (block-size game)
                                         nbodies)
        new-game (replace-entities game nbodies)
        pairs (generate-collision-list coll-matrix
                                       (block-size game)
                                       expanded-frame)]
    (reduce (partial handle-collision ch)
            new-game
            pairs)))


(defn get-key-code [event]
  (let [e (if event event (.-event js/window))
        code (.-keyCode e)]
    (if (and (.-charCode e) (= code 0))
      (.-charCode e)
      code)))

(defn- code->action [actions key]
  (fn [code] (get-in actions [code key])))

;;{:on-down {key-code [{:action :key :data ;;}}]
(defn handle-keys [ch actions]
  (let [on-down (code->action actions :on-down)
        on-up (code->action actions :on-up)]
    (set! (.-onkeydown js/document)
       #(let [code (get-key-code %)]
          (if (on-down code)
            (doseq [action (on-down code)]
              (apply send-action ch action)))))
    (set! (.-onkeyup js/document)
       #(let [code (get-key-code %)]
          (if (on-up code)
            (doseq [action (on-up code)]
              (apply send-action ch action)))))))



(defn adjust-frame [game]
  (let [{:keys [x y width height buffer]} (frame game)
        dw (or buffer (* width .2))
        dh (or buffer (* height .2))
        tx (+ x dw)
        lx (- (+ x width) dw)
        ty (+ y dh)
        ly (- (+ y height) dh)
        {hx :x hy :y} (framed-character game)
        nframe (cond-> (frame game)
                 (< hx tx) (assoc :x (- x (- tx hx)))
                 (> hx lx) (assoc :x (+ x (- hx lx)))
                 (< hy ty) (assoc :y (- y (- ty hy)))
                 (> hy ly) (assoc :y (+ y (- hy ly))))
        {:keys [x y width height]} nframe
        nframe (assoc nframe
                      :x (check-bounds x width 0 (:width (board game)))
                      :y (check-bounds y height 0 (:height (board game))))]
    (update-frame game (fn [_] nframe))))

;; ---------------------------------------------------------------------
;; Action Methods

(defn send-action [ch action & args]
  (when (or (not @debug-flag)
            (= action :debug))
    (put! ch {:action action :args args})))

(defn schedule-action [ch timing action & args]
  (go (<! (timeout timing))
      (apply send-action ch action args)))

(defn edit-loop [ch timing action & args]
  (go
    (while true
      (<! (timeout timing))
      (apply send-action ch action args))))


;; ---------------------------------------------------------------------
;; Main Setup

(defn- set-world [game ch world-id]
  (let [world (world game world-id)
        new-game (switch-worlds game world-id)
        matrix (init-collision-matrix new-game)
        k-actions (key-actions game world-id)]
    (when k-actions
      (handle-keys ch k-actions))
    (set-collision-matrix new-game matrix)))

(defn restor-entity [game ])

(defn run-loop [ch game debug-ch]
  ;; FPS
  (go
    (while true
     (<! (timeout (/ 1000 (fps game))))
     (send-action ch :step)))

  ;;action loop
  (go-loop [game game]
    (when-let [msg (<! ch)]
      (when-not (= (:action msg) :quit)
        (let [new-game
              (case (:action msg)
                :step (step game ch)
                :update-entity (apply update-entity game (:args msg))
                :update-state (apply update-state game (:args msg))
                :show (apply show-entity game (:args msg))
                :hide (apply hide-entity game (:args msg))
                :pause (pause-game game)
                :unpause (unpause-game game)
                :debug (do
                         (swap! debug-flag not)
                         (println "debug:" (pr-str debug-flag))
                         (debug game))
                :switch-world (apply set-world game ch (:args msg)))]
          (when debug-ch
            (put! debug-ch {:event msg :state game}))
          (recur new-game))))))


(defn init-game
  ([game world-id]
   (init-game game world-id false))
  ([game world-id debug]
   (let [event-ch (chan)
         debug-ch (when debug (chan))
         game (set-world game event-ch world-id)]
     (run-loop event-ch game debug-ch)
     {:event-ch event-ch
      :debug-ch debug-ch
      :game game})))

(defn render-game [{:keys [game event-ch] :as x} target-id]
  (initial-draw game event-ch target-id))

(comment
  ;; WORLD
  {:board {:img nil :color "#7F7FFF"}
   :frame {:x 0 :y 0 :width 0 :height 0}
   :solids [:id1 :id2]
   :colision-matrix [[:id1 nil nil]
                     [:id2 nil nil]
                     [nil nil nil]]

   :characters [:id3 :id4 :id5]
   :regisrty {:id1 (...)
              :id2 (...)
              :id3 (...)
              :id4 (...)}
   :overlays []
   :keyactions {}
   :runstate :paused})

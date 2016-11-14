(ns peli.impl.events
  (:require [peli.protocols :as p]
            [peli.impl.collision :as coll]))

;; ---------------------------------------------------------------------
;; Re-frame Style handlers with schedule ability

(def event-queue (atom []))

(def event-handlers (atom {}))

(defn now []
  #?(:clj (System/currentTimeMillis)
          :cljs (js/Date.now)))

(defn- filter-events [events]
  (let [mills (now)]
    (reduce (fn [[cur fut] event]
              (if (<= (first event) mills)
                [(conj cur event) fut]
                [cur (conj fut event)]))
            [[] []]
            events)))

;;TODO - this needs to be interceptor based like re-frame 0.8.0
(defn reg-event-fx [handler-key func]
  (swap! event-handlers assoc handler-key func))

(defn schedule [event mills]
  (swap! event-queue conj [mills event]))

(defn dispatch [event]
  (schedule event (now)))

(defn process-events [game]
  (let [events @event-queue
        [current future] (filter-events events)]
    (if (compare-and-set! event-queue events [])
      (reduce (fn [game [time event]]
                (let [handler-key (first event)
                      handler (get event-handlers handler-key)
                      res (handler {:db game} event)
                      {:keys [db dispatch schedule]} res
                      dispatch (if (keyword? (first dispatch))
                                 [dispatch]
                                 dispatch)
                      schedule (if (map? schedule)
                                 [schedule]
                                 schedule)]
                  ;;TDOD - these should be handled through interceptors
                  (doseq [event dispatch]
                    (dispatch event))
                  (doseq [{:keys [ms dispatch]} schedule]
                    (schedule dispatch ms))
                  (if db db game)))
              game
              events)
      (recur game))))

;; ---------------------------------------------------------------------
;; Input Handlers

(def possible-input-events
  [:click :dblclick
   :mousemove :mouseenter :mouseleave
   :touchstart :touchend :touchmove
   :keyup :keydown :keypress])


(def input-handlers (atom {}))
(def enter-exit-tracker (atom #{}))

(defn remove-input-handlers! [id]
  (swap! input-handlers
         #(reduce (fn [handlers handler-key]
                    (update handlers handler-key dissoc id))
                  % (keys %))))

(defn add-input-handlers! [id handler-map]
  (remove-input-handlers! id)
  (swap! input-handlers
         #(reduce (fn [handlers [handler-key handler]]
                    (update handlers
                            handler-key
                            (fnil assoc {})
                            id
                            handler))
                  % handler-map)))

;; ---------------------------------------------------------------------
;; Input Handler Helper Functions

(defn initialize-handlers! [world]
  (reset! input-handlers {})
  (add-input-handlers! :global (p/event-handlers world))
  (doseq [[id body] (p/bodies world)]
    (when (satisfies? p/IInteractive body)
      (add-input-handlers! (p/id body) (p/event-handlers body)))))


(defn position->bids [[x y] game]
  (let [matrix (p/collision-matrix game)
        block-size (p/block-size game)
        col (int (/ x block-size))
        row (int (/ y block-size))
        canidates (get matrix (coll/cell-key row col))]
    (->> canidates
         (map #(p/body game %))
         (sort-by p/depth)
         (map p/id))))


(def key-events #{:keypress :keyup :keydown})
(def position-events #{:mousemove :click :mousedown :mouseup :touchstart :touchend :touchmove})

(defn process-key-events [game e]
  (reduce (fn [game [id handler]]
            (if-not (= id :global)
              (handler e game)
              game))
          game
          (get @input-handlers (:type e))))


(defn process-position-events [game {:keys [type] :as e}]
  (let [pos (get-in e [:data :position])
        bids (position->bids pos game)]
    (reduce (fn [game handler]
              (if handler
                (handler e game)
                game))
            game
            (map #(get-in @input-handlers [type %]) bids))))


(defn process-global-events [game {:keys [type] :as e}]
  (if-let [handler (get-in @input-handlers [type :global])]
    (handler e game)
    game))


(defn event-dispatcher [game-atm]
  (fn [e]
    (swap! game-atm
           #(cond-> (process-global-events % e)
              (key-events (:type e))
              (process-key-events e)

              (position-events (:type e))
              (process-position-events e)))))

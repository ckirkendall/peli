(ns peli.handlers
  (:require [re-frame.core :as re-frame]
            [peli.engine :as peli]
            [peli.time-debugger :as d]))


(re-frame/register-handler
 :peli/step
 (fn [db [_ ]]
   (let [new-db (update db :peli/game
                        (fn [game]
                          (cond
                            (and (not (get-in db [:peli/debug :hidden]))
                                 (= :debug (get-in db [:peli/debug :mode])))
                            game

                            (= (peli/run-state game) :paused) ;;show prompts
                            (peli/adjust-frame game)

                            :else
                            (-> game
                                (peli/run-physics)
                                (peli/adjust-frame)))))]
     (when (and (not (get-in db [:peli/debug :hidden]))
                (= :record (get-in db [:peli/debug :mode])))
       (re-frame/dispatch [:peli-debug/add-event]))
     new-db)))

(re-frame/register-handler
 :peli/update-entity
 (fn [db [_ id func]]
   (update-in db [:peli/game :active-world :registry id] func)))

(re-frame/register-handler
 :peli/update-state
 (fn [db [_ func]]
   (update-in db [:peli/game :state] func)))

(re-frame/register-handler
 :peli/show
 (fn [db [_ id]]
   (assoc-in db [:peli/game :active-world :registry id :hidden] false)))

(re-frame/register-handler
 :peli/hide
 (fn [db [_ id]]
   (assoc-in db [:peli/game :active-world :registry id :hidden] true)))

(re-frame/register-handler
 :peli/pause
 (fn [db _]
   (assoc-in db [:peli/game :active-world :run-state] :paused)))

(re-frame/register-handler
 :peli/unpause
 (fn [db _]
   (assoc-in db [:peli/game :active-world :run-state] :running)))

(re-frame/register-handler
 :peli/reset-game
 (fn [db [_ game-state]]
   (assoc db :peli/game game-state)))

;; ---------------------------------------------------------------------
;; Debugger

(re-frame/register-handler
 :peli-debug/init
 (fn [db [_ defaults]]
   (assoc db :peli/debug defaults)))

(re-frame/register-handler
 :peli-debug/toggle-debugger
 (fn [db _]
   (cond-> db
     (= :debug (get-in db [:peli/debug :mode]))
     (d/start-record)

     (= :record (get-in db [:peli/debug :mode]))
     (d/start-debug)

     :always
     (update-in [:peli/debug :hidden] not))))

(re-frame/register-handler
 :peli-debug/record
 (fn [db _]
   (update-in db [:peli/debug] d/start-record)))

(re-frame/register-handler
 :peli-debug/start-debug
 (fn [db _]
   (update-in db [:peli/debug] d/start-debug)))

(re-frame/register-handler
 :peli-debug/next-event
 (fn [db [_ event]]
   (let [state (get db :peli/debug)
         idx (inc (d/event->idx state event))
         max (dec (count (:queue state)))
         cur-event (get-in state [:queue (min idx max)])]
     (re-frame/dispatch [:peli/reset-game (:state cur-event)])
     (assoc-in db [:peli/debug :cur-event] cur-event))))

(re-frame/register-handler
 :peli-debug/prev-event
 (fn [db [_ event]]
   (let [state (get db :peli/debug)
         idx (dec (d/event->idx state event))
         cur-event (get-in state [:queue (max idx 0)])]
     (re-frame/dispatch [:peli/reset-game (:state cur-event)])
     (assoc-in db [:peli/debug :cur-event] cur-event))))


(re-frame/register-handler
 :peli-debug/set-time
 (fn set-time [db [_ idx]]
   (let [{:keys [queue]} (:peli/debug db)
         [cur prev] (d/find-events queue idx)]
     (re-frame/dispatch [:peli/reset-game (:state cur)])
     (update db :peli/debug assoc
            :cur-event cur
            :prev-event prev))))

(re-frame/register-handler
 :peli-debug/add-event
 (fn set-time [db _]
   (let [tevent {:state (get db :peli/game)}]
     (update db :peli/debug
             (fn [state]
               (-> state
                   (assoc :cur-event tevent
                          :prev-event (peek (:queue state)))
                   (update :queue conj tevent)))))))

(re-frame/register-handler
 :peli-debug/clean-queue
 (fn set-time [db lookback]
   (update db :peli/debug
           (fn [{:keys [queue] :as state}]
             (let [idx (- (count queue) lookback)
                   new-q (subvec queue idx)]
               (-> state
                   (assoc :queue new-q)))))))

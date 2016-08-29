(ns peli.time-debugger
  (:require-macros
   [cljs.core.async.macros :refer (go go-loop)])
  (:require
   [cljs.core.async :refer (timeout put! chan)]
   [reagent.core :as reagent :refer [atom cursor]]))

;; ---------------------------------------------------------------------
;; Protocols

(defprotocol IDebugAdaptor
  (-transform [this event])
  (-display [this prev-event cur-event])
  (-reset-state! [this event])
  (-init-debugger-state [this defaults]))

(defn transform [adaptor event]
  (-transform adaptor event))

(defn display [adaptor prev-event cur-event]
  (-display adaptor prev-event cur-event))

(defn reset-state! [adaptor event]
  (-reset-state! adaptor event))

(defn init-debugger-state [adaptor defaults]
  (-init-debugger-state adaptor defaults))


;; ---------------------------------------------------------------------
;; Event Queue Management

(defn- cleanup-queue [state interval lookback]
  (go-loop []
    (when (= (:mode @state) :debug)
      (swap! state
             (fn [{:keys [queue] :as state}]
               (let [idx (- (count queue) lookback)
                     new-q (subvec queue idx)]
                 (-> state
                     (assoc :queue new-q))))))
    (<! (timeout interval))
    (recur)))


(defn- gather-events [dch state adaptor]
  (go-loop []
    (let [{:keys [queue mode]} @state]
      (if (= mode :record)
        (let [event (<! dch)
              time (.getTime (js/Date.))
              tevent {:time time
                      :event (transform adaptor event)}]
          (swap! state
                 (fn [state]
                   (-> state
                       (assoc :cur-event tevent
                              :prev-event (peek (:queue state)))
                       (update :queue conj tevent))))
          (recur))
        (do (<! (timeout 500))
            (recur))))))


;; ---------------------------------------------------------------------
;; Helper methods


(defn- find-events [queue idx]
  (println (count queue) idx (type idx))
  (let [cur (nth queue idx)
        prev (when (pos? (dec idx))
               (nth queue (dec idx)))]
    [cur prev]))


(defn- event->idx [state event]
  (some identity
        (map-indexed (fn [idx e]
                       (when (= event e)
                         idx))
                     (:queue state))))


(defn set-time [state-atm adaptor idx]
  (let [{:keys [queue]} @state-atm
        [cur prev] (find-events queue idx)]
    (reset-state! adaptor cur)
    (swap! state-atm #(assoc %
                       :cur-event cur
                       :prev-event prev))))


(defn- prev-e [state-atm adaptor event]
  (swap! state-atm
         (fn [state]
           (let [idx (dec (event->idx state event))]
             (assoc state :cur-event
                    (get-in state [:queue (max idx 0)])))))
  (reset-state! adaptor (:cur-event @state-atm)))


(defn- next-e [state-atm adaptor event]
  (swap! state-atm
         (fn [state]
           (let [idx (inc (event->idx state event))
                 max (dec (count (:queue state)))]
             (assoc state :cur-event
                    (get-in state [:queue (min idx max)])))))
  (reset-state! adaptor (:cur-event @state-atm)))


;; ---------------------------------------------------------------------
;; Public Actions

(defn start-record [state]
  (let [cur-event (:cur-event @state)
        idx (event->idx @state cur-event)]
    (swap! state
           #(assoc %
                   :queue (subvec (:queue %) 0 idx)
                   :mode :record))))

(defn start-debug [state]
  (swap! state assoc :mode :debug))


;; ---------------------------------------------------------------------
;; Main Rendering

(defn- renderer [state adaptor]
  (let [{:keys [hidden cur-event prev-event
                queue mode min-time max-time]} @state]
    (when-not hidden
      [:div {:id "time-debugger"}
       (if (= mode :record)
         [:button {:on-click #(start-debug state)}
          "debug"]
         (let [idx (event->idx @state cur-event)]
           [:span
            [:div
             [:button {:on-click #(start-record state)}
              "record"]
             [:button {:on-click #(prev-e state adaptor cur-event)} "<"]
             [:button {:on-click #(next-e state adaptor cur-event)} ">"]
             [:input {:type :range
                      :style {:float :right}
                      :min 0
                      :max (dec (count queue))
                      :value (or idx (dec (count queue)))
                      :on-change #(set-time state
                                            adaptor
                                            (int (.-target.value %)))}]]]))
       (when (and cur-event (= mode :debug))
         [:div
          [display adaptor prev-event cur-event]])])))


(defn init-debugger [dch adaptor target-id opts]
  (let [defaults {:queue []
                  :hidden true
                  :mode :record}
        debugger-state (or (init-debugger-state adaptor defaults)
                           (atom defaults))]
    (cleanup-queue debugger-state
                   (:cleanup-interval opts 500)
                   (:lookback opts 1000))
    (gather-events dch debugger-state adaptor)
    (reagent/render-component
     [renderer debugger-state adaptor]
     (js/document.getElementById target-id))
    debugger-state))

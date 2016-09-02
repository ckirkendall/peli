(ns peli.time-debugger
  (:require-macros
   [cljs.core.async.macros :refer (go go-loop)])
  (:require
   [re-frame.core :as re-frame]
   [cljs.core.async :refer (timeout put! chan)]
   [reagent.core :as reagent :refer [atom cursor]]
   [clojure.data :refer [diff]]))



;; ---------------------------------------------------------------------
;; Event Queue Management

(defn- cleanup-queue [interval lookback]
  (let [state (re-frame/subscribe [:peli/game])]
    (go-loop []
      (when (= (:mode @state) :debug)
        (re-frame/dispatch [:peli-debug/cleanup-queue lookback]))
      (<! (timeout interval))
      (recur))))

;; ---------------------------------------------------------------------
;; Helper methods

(defn- find-events [queue idx]
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

;; ---------------------------------------------------------------------
;; Public Actions

(defn start-record [state]
  (let [cur-event (:cur-event state)
        idx (event->idx state cur-event)]
    (assoc state
           :queue (subvec (:queue state) 0 idx)
           :mode :record)))

(defn start-debug [state]
  (assoc state :mode :debug))


;; ---------------------------------------------------------------------
;; Main Rendering


(defn display [prev-event cur-event]
  (let [[removed added] (diff (:state prev-event) (:state cur-event))]
    [:div {:id "svg-event"}
     [:div [:label "action"]
      [:span (pr-str (get-in cur-event [:event :action]))]]
     [:div [:label "args"] [:span (pr-str (get-in cur-event [:event :args]))]]
     [:div [:label "added"] [:span (pr-str added)]]
     [:div [:label "removed"] [:span (pr-str removed)]]]))

(defn- renderer []
  (let [state (re-frame/subscribe [:peli-debug/state])]
    (fn []
      (let [{:keys [hidden cur-event prev-event
                    queue mode min-time max-time]} @state]
        (when-not hidden
          [:div {:id "time-debugger"}
           (if (= mode :record)
             [:button {:on-click #(re-frame/dispatch [:peli-debug/start-debug])}
              "debug"]
             (let [idx (event->idx @state cur-event)]
               [:span
                [:div
                 [:button {:on-click #(re-frame/dispatch [:peli-debug/start-record])}
                  "record"]
                 [:button {:on-click #(re-frame/dispatch [:peli-debug/prev-event cur-event])} "<"]
                 [:button {:on-click #(re-frame/dispatch [:peli-debug/next-event cur-event])} ">"]
                 [:input
                  {:type :range
                   :style {:float :right}
                   :min 0
                   :max (dec (count queue))
                   :value (or idx (dec (count queue)))
                   :on-change #(re-frame/dispatch [:peli-debug/set-time (int (.-target.value %))])}]]]))
           (when (and cur-event (= mode :debug))
             [:div
              [display prev-event cur-event]])])))))


(defn init-debugger [target-id opts]
  (let [defaults {:queue []
                  :hidden true
                  :mode :record}]
    (re-frame/dispatch [:peli-debug/init defaults])
    (cleanup-queue (:cleanup-interval opts 500)
                   (:lookback opts 1000))
    (reagent/render-component
     [renderer]
     (js/document.getElementById target-id))))

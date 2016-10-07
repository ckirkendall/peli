(ns peli.events
  (:require [peli.protocols :as p]))

(comment
  (defn now []
    #?(:clj (System/currentTimeMillis))
    #?(:cljs (js/Date.now)))


  (defn process-events [game]
    {:pre [(satisfies? p/IGame game)]}
    (let [now (js/Date.now)
          events (-> (p/event-queue game)
                     (filter #(>= now (:timing %))))]
      (reduce (fn [game event]
                (process-event game event))
              game
              events)))

  (defn dispatch [game event]
    (schedule game event (now)))

  (defn schedule [game event timing]
    (cond
      (satisfies? p/IGame game)
      (p/add-event game {:event event :timing timing})

      (satifies? p/IGame @game)
      (swap! game dispatch-event event timing)))


  (defmulti handle (fn [game [event & args]] event)))

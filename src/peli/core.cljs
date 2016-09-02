(ns peli.core
  (:require [reagent.core :as reagent]
            [peli.engine :as engine]
            [peli.handlers]
            [peli.subs]))


(defn run-game [intial-state initial-world adaptor-draw-fn target-id]
  (engine/init-game intial-state initial-world)

  (reagent/render-component
   [adaptor-draw-fn]
   (js/document.getElementById target-id)))

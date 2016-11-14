(ns user
  (:require [peli.core :as peli]
            [peli.simple-game :as simple-game]))


(defn start []
  (peli/reset simple-game/game :word1))

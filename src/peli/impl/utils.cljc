(ns peli.impl.utils
  (:require [peli.protocols :as p]))

(defn gen-id [seed]
  (keyword (gensym seed)))

(defn is-static? [body]
  (and (= (p/inv-mass body) 0.0)
       (= (p/inv-moment-i body) 0.0)))


(defn now []
  #?(:clj (System/currentTimeMillis)
     :cljs (js/Date.now)))

(defn framed-position [game [bx by]]
  (let [{:keys [x y]} (p/frame game)]
    [(- bx x) (- by y)]))

(defn global-position [game [fx fy]]
  (let [{:keys [x y]} (p/frame game)]
    [(+ fx x) (+ fy y)]))

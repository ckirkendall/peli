(ns peli.impl.utils
  (:require [peli.protocols :as p]
            [peli.impl.phy-math :refer [dot]]))

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


(defn rotate-to-normal [{:keys [nx ny] :as normal}]
  (let [dir (cond
              (and (pos? nx) (pos? (* nx ny))) 1.0
              (and (pos? nx) (neg? (* nx ny))) -1.0
              (and (neg? nx) (pos? (* nx ny))) -1.0
              (and (neg? nx) (neg? (* nx ny))) 1.0)]
    (* dir (Math/acos (dot normal [1 0])))))

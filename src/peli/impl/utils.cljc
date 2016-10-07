(ns peli.impl.utils
  (:require [peli.protocols :as p]))

(defn gen-id [seed]
  (keyword (gensym seed)))

(defn is-static? [body]
  (and (= (p/inv-mass body) 0.0)
       (= (p/inv-moment-i body) 0.0)))

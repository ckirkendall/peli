(ns peli.impl.utils)

(defn gen-id [seed]
  (keyword (gensym seed)))

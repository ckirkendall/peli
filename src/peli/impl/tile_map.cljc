(ns peli.impl.tile-map
  #?(:cljs (:require-macros [peli.impl.tile-map :refer [load-map]]))
  (:require #?(:clj [clojure.java.io :as io])
            #?(:clj [clojure.xml :as xml])
            #?(:cljs [cljs.reader :refer [read-string]])
            [clojure.string :as str]
            [peli.impl.background-image :as bg-img]
            [peli.impl.geometry :refer [create-box create-circle create-poly]]))

(defn load-map [resource-path]
  #?(:clj (let [tm-in (-> resource-path
                          io/resource
                          io/input-stream)]
            (xml/parse tm-in))))

;;we write this out as a string and read it in
;;because it the google closure compiler has
;;some issues with deeply nested clojurescript
;;structures
(defmacro inline-tile-map [tile-path]
  `(cljs.reader/read-string ~(pr-str (load-map tile-path))))

(defn read-double [val]
  (double (read-string val)))

(defn extract-object-shapes [tile-map]
  (let [obj-grp (first (filter #(= :objectgroup (:tag %)) (:content tile-map)))]
    [(read-double (get-in obj-grp [:attrs :offsetx] "0"))
     (read-double (get-in obj-grp [:attrs :offsety] "0"))
     (:content obj-grp)]))


(defn extract-file-name [source]
  (last (str/split source #"/")))

(defn extract-image-layers [tile-map]
  (let [imgs (filter #(= :imagelayer (:tag %)) (:content tile-map))]
    (for [{:keys [content]} imgs]
      (let [[{{:keys [offsetx offsety source width height]
                :or {offsetx "0"
                     offsety "0"}} :attrs}] content
             source (extract-file-name source)]
        {:source source
         :position [(read-double offsetx)
                    (read-double offsety)]
         :width (read-double width)
         :height (read-double height)}))))

(defn image-spec->background-image+sprites [specs]
  (reduce (fn [[sprites bg-imgs] {:keys [source position width height]}]
            [(assoc sprites source source)
             (conj bg-imgs
                   (bg-img/create-background-image position source width height))])
          [{} []]
          specs))

(defn point-str->points [point-str]
  (let [point-strs (partition 2 (str/split point-str #" |,"))]
    (map (fn [[x y]]
           [(read-double x)
            (read-double y)]) point-strs)))

(defn convert-shape [[offset-x offset-y] {{:keys [width height x y]} :attrs
                                          content :content
                                          :as obj}]
  (cond
    (nil? content)
    (create-box {:position [(+ offset-x (read-double x) (/ (read-double width) 2))
                            (+ offset-y (read-double y) (/ (read-double height) 2))]
                 :width (read-double width)
                 :height (read-double height)})

    (= :polygon (:tag (first content)))
    (create-poly {:position [(+ offset-x (read-double x))
                            (+ offset-y (read-double y))]
                  :points (point-str->points (get-in content [0 :attrs :points]))})

    (= :ellipse (:tag (first content)))
    (create-circle {:position [(+ offset-x (read-double x))
                               (+ offset-y (read-double y))]
                    :radius (/ (read-double width) 2)})))

(defn tile-map->bodies [tile-map factory-map]
  (let [[offset-x offset-y shapes] (extract-object-shapes tile-map)
        [sprites background-images] (-> tile-map
                                        (extract-image-layers)
                                        (image-spec->background-image+sprites))]
    {:sprites sprites
     :bodies (into background-images
                   (remove nil?
                           (map #(let [id (get-in % [:attrs :id])
                                       type (get-in % [:attrs :type])
                                       factory (get factory-map type
                                                    (get factory-map id identity))]
                                   (factory (convert-shape [offset-x offset-y] %))) shapes)))}))

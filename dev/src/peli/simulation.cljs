(ns peli.simulation
  (:require-macros
   [cljs.core.async.macros :refer (go go-loop)]
   [reagent.ratom :refer [reaction]])
  (:require
   [reagent.core :as reagent]
   [cljs.core.async :refer [<! timeout]]
   [re-frame.core :as re-frame]
   [peli.physics :as phy]
   [peli.geometry :as geo]
   [peli.collision :as coll]
   [peli.response :as res]
   [clojure.set :as s]))

(def width 600.0)
(def height 600.0)
(def block-size 30)

(re-frame/register-handler
 ::init
 (fn [db _]
   (let [b1 (-> (geo/create-circle {:id :box1
                                    :position [50.0 250.0]
                                    :radius 35.0
                                    :density 1})
                (phy/apply-force [1150.0 0.0] [[15.0 260.0]] 1000.0))]
     (println "B1:" b1)
     {:bodies {:box1 b1

               :c2 (geo/create-circle {:id :c2
                                       :position [340.0 100.0]
                                       :radius 35.0
                                       :density 1})
               :box2 (geo/create-box {:id :box2
                                      :position [300.0 225.0]
                                      :width 50.0
                                      :height 50.0
                                      :density 1})
               :c3 (geo/create-circle {:id :c3
                                       :position [500.0 100.0]
                                       :radius 25.0
                                       :density 1})
               :b1 (geo/create-box {:id :b1
                                    :position [410.0 125.0]
                                    :width 50.0
                                    :height 50.0
                                    :density 1})
               :box3 (geo/create-box {:id :box3
                                      :position [450.0 220.0]
                                      :width 50.0
                                      :height 50.0
                                      :density 1})
               :b2 (geo/create-box {:id :b2
                                    :position [450.0 50.0]
                                    :width 50.0
                                    :height 50.0
                                    :density 1})
               :b3 (geo/create-box {:id :b3
                                    :position [50.0 50.0]
                                    :width 50.0
                                    :height 50.0
                                    :density 1})

               :b6 (geo/create-circle {:id :b6
                                       :position [55.0 500.0]
                                       :radius 35.0
                                       :density 1})
               :b7 (geo/create-circle {:id :b7
                                       :position [255.0 500.0]
                                       :radius 35.0
                                       :density 1})
               :b8 (geo/create-circle {:id :b8
                                       :position [355.0 500.0]
                                       :radius 35.0
                                       :density 1})
               :b9 (geo/create-circle {:id :b9
                                       :position [255.0 400.0]
                                       :radius 35.0
                                       :density 1})
               :b10 (geo/create-circle {:id :b10
                                        :position [355.0 400.0]
                                        :radius 35.0
                                        :density 1})
               :b5 (geo/create-box {:id :b5
                                    :position [150.0 50.0]
                                    :width 50.0
                                    :height 50.0
                                    :density 1})
               :bound1 (geo/create-box {:id :bound1
                                        :position [0.0 (/ height 2.0)]
                                        :width 10
                                        :height height
                                        :mass js/Number.POSITIVE_INFINITY})
               :bound2 (geo/create-box {:id :bound2
                                        :position [width (/ height 2.0)]
                                        :width 10
                                        :height height
                                        :density js/Number.POSITIVE_INFINITY})
               :bound3 (geo/create-box {:id :bound3
                                        :position [(/ width 2.0) 0]
                                        :width width
                                        :height 10
                                        :density js/Number.POSITIVE_INFINITY})
               :bound4 (geo/create-box {:id :bound4
                                        :position [(/ width 2.0) height]
                                        :width width
                                        :height 10
                                        :density js/Number.POSITIVE_INFINITY})}})))

(defn test-collisions [db pairs]
  (reduce (fn [colls pair]
            (let [o1 (get db (first pair))
                  o2 (get db (second pair))]
              (if-not (= 0 (geo/inv-mass o1) (geo/inv-mass o2))
                (if-let [collision (coll/collision o1 o2)]
                  (conj colls collision)
                  colls)
                colls)))
          []
          pairs))



(defn matrix-bounds [block-size [[x1 y1] [x2 y2]]]
  (let [col (max (Math/floor (/ x1 block-size)) 0)
        row (max (Math/floor (/ y1 block-size)) 0)
        max-col (max (Math/floor (/ x2 block-size)) 0)
        max-row (max (Math/floor (/ y2 block-size)) 0)]
    [col row max-col max-row]))


(defn add-item-to-matrix [matrix block-size {:keys [id] :as item}]
  (let [[col row max-col max-row] (matrix-bounds block-size (geo/bounds item))]
    (reduce (fn [m row]
              (reduce (fn [m col]
                        (update-in m [row col] (fnil conj #{}) id))
                      m
                      (range col (inc max-col))))
            matrix
            (range row (inc max-row)))))


(defn add-items-to-matrix [matrix block-size items]
  (reduce (fn [m item]
            (add-item-to-matrix m block-size item))
          matrix
          items))


(defn build-matrix [block-size width height]
  (let [num-cols (inc (Math/floor (/ width block-size)))
        num-rows (inc (Math/floor (/ height block-size)))]
    (mapv (fn [row]
            (mapv (fn [col] nil) (range num-cols)))
          (range num-rows))))


(defn generate-pairs [[el & next]]
  (if (empty? next) #{}
      (into (generate-pairs next)
            (map #(do #{el %}) next))))

(defn generate-collision-list [matrix block-size expanded-frame]
  (let [[col row max-col max-row] (matrix-bounds block-size
                                                 expanded-frame)])
  (apply s/union
    (for [row matrix
          items row]
      (generate-pairs (seq items)))))



(re-frame/register-handler
 ::step
 (fn [db _]
   (if-not (:collision db)
     (let [dt phy/default-dt
           body-map (:bodies db)
           bodies (vals body-map)
           body-map (zipmap (keys body-map)
                            (map #(-> %
                                      (phy/apply-gravity phy/default-gravity dt)
                                      (phy/apply-physics dt))
                              bodies))
           matrix (-> (build-matrix block-size (int width) (int height))
                      (add-items-to-matrix block-size (vals body-map)))
           db (assoc db :matrix matrix)
           pairs (generate-collision-list matrix block-size [[0 0] [width height]])
           collisions (test-collisions body-map pairs)]
       (if-not (empty? collisions)
         (let [colls (res/collision-response collisions dt phy/default-gravity)
               [bodies colls imp-map] (res/solve-positions colls (:imp-map db {}))
               body-map (reduce (fn [bm body]
                                  (assoc bm (geo/id body) body))
                             body-map
                             bodies)]
           (assoc db
                  :bodies body-map
                  :imp-map imp-map
                  #_#_:collision colls))
         (assoc db :bodies body-map)))
     db)))


(re-frame/register-sub
 ::bodies
 (fn [db _]
   (reaction (vals (:bodies @db)))))

(re-frame/register-sub
 ::matrix
 (fn [db _]
   (reaction (:matrix @db))))

(defn rad->deg [rad]
  (/ (* rad 180.0) Math/PI))


(defn draw-box [box]
  (let [[[fx fy] :as points] (geo/points box)
        pstr (str (apply str (interpose " " (map (fn [[x y]]
                                                   (str x "," y)) points)))
                           (str " " fx "," fy))]
    [:polygon {:points pstr
              :style {:fill "lightgray"
                      :stroke "blue"
                      :stroke-width "1"}}]))

(defn draw-circle [body]
  (let [[x y] (geo/position body)
        r (geo/radius body)
        rot (geo/rotation body)]
    [:g {:transform (str "translate(" x " " y ") "
                         "rotate(" (rad->deg rot) " " 0 " " 0 ")")}
     [:circle {:cx 0 :cy 0 :r r
               :style {:fill "lightgray"
                       :stroke "blue"
                       :stroke-width "1"}}]
     [:line {:x1 0 :y1 r :x2 0 :y2 0
             :style {:stroke-width "2" :stroke "blue"}}]]))


(defn draw-matrix-row [row-idx matrix block-size]
  (let [row (nth matrix row-idx)]
    [:g
     (map (fn [idx]
            (when (nth row idx)
              ^{:key (str row-idx "_" idx)}
              [:rect {:x (* block-size idx)
                      :y (* block-size row-idx)
                      :width block-size
                      :height block-size
                      :style {:stroke "red"
                              :stroke-width "1"
                              :stroke-opacity "0.2"
                              :fill "transparent"}}]))
       (range (count row)))]))

(defn draw-matrix [matrix block-size]
  [:g
   (map (fn [row-idx]
          ^{:key (str row-idx)}
          [draw-matrix-row row-idx matrix block-size])
     (range (count matrix)))])

(defn bodies->svg []
  (let [bodies (re-frame/subscribe [::bodies])
        matrix (re-frame/subscribe [::matrix])]
    (fn []
      (when-not (empty? @bodies)
        [:div
         [:svg {:width width
                :height height}
          [:rect {:fill "darkgray"
                  :x 0 :y 0
                  :width width
                  :height height}]
          #_[draw-matrix @matrix block-size]
          [:g
           (map (fn [body]
                  (cond
                    (instance? geo/Circle body)
                    ^{:key (:id body)} [draw-circle body]
                    (instance? geo/ConvexPolygon body)
                    ^{:key (:id body)} [draw-box body]))
             @bodies)]]]))))


(defn init []
  (re-frame/dispatch [::init])
  (go-loop []
    (<! (timeout (* 1000 phy/default-dt)))
    (re-frame/dispatch [::step])
    (recur ))
  (reagent/render-component
   [bodies->svg]
   (js/document.getElementById  "myGameDiv")))

(init)

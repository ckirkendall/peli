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
   [peli.response :as res]))

(def width 1000.0)
(def height 600.0)

(re-frame/register-handler
 ::init
 (fn [db _]
   (let [b1 (-> (geo/create-circle {:id :box1
                                    :position [50.0 250.0]
                                    :radius 35.0
                                    :density 1})
                (phy/apply-force [1050.0 0.0] [[15.0 260.0]] 1000.0))]
     (println "B1:" b1)
     {:box1 b1
      :box2 (geo/create-box {:id :box2
                             :position [300.0 225.0]
                             :width 50.0
                             :height 50.0
                             :density 1})
      :box3 (geo/create-box {:id :box3
                             :position [450.0 220.0]
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
                               :density js/Number.POSITIVE_INFINITY})})))

(defn test-collisions [pairs]
  (reduce (fn [colls [o1 o2]]
            (if (geo/bounds-overlap? o1 o2)
              (if-let [collision (coll/collision o1 o2)]
                (conj colls collision)
                colls)
              colls))
          []
          pairs))

(re-frame/register-handler
 ::step
 (fn [db _]
   (if-not (:collision db)
     (let [dt phy/default-dt
           db (zipmap (keys db)
                      (map #(-> %
                                (phy/apply-gravity phy/default-gravity dt)
                                (phy/apply-physics dt))
                        (vals db)))
           b1 (:box1 db)
           b2 (:box2 db)
           b3 (:box3 db)
           bound1 (:bound1 db)
           bound2 (:bound2 db)
           bound3 (:bound3 db)
           bound4 (:bound4 db)
           collisions (test-collisions [[b1 b2] [b2 b3] [b1 b3]
                                        [b1 bound1] [b2 bound1] [b3 bound1]
                                        [b1 bound2] [b2 bound2] [b3 bound2]
                                        [b1 bound3] [b2 bound3] [b3 bound3]
                                        [b1 bound4] [b2 bound4] [b3 bound4]])]
       (if-not (empty? collisions)
         (let [colls (res/collision-response collisions dt phy/default-gravity)
               colls (res/position-correction colls)]
           #_(println :COLLISION colls)
           (-> (reduce (fn [db {:keys [a b] :as col}]
                               (assoc db (:id a) a (:id b) b))
                             db
                             colls)
               #_(assoc :collsion colls))
           )
         db))
     db)))


(re-frame/register-sub
 ::bodies
 (fn [db _]
   (reaction (vals @db))))


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

(defn bodies->svg []
  (let [bodies (re-frame/subscribe [::bodies])]
    (fn []
      (when-not (empty? @bodies)
        [:div
         [:svg {:width width
                :height height}
          [:rect {:fill "darkgray"
                  :x 0 :y 0
                  :width width
                  :height height}]
          [:g
           (map (fn [body]
                  (if (instance? geo/Circle body)
                    ^{:key (:id body)} [draw-circle body]
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

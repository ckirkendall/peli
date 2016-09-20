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


(re-frame/register-handler
 ::init
 (fn [db _]
   (let [b1 (-> (geo/create-circle {:id :box1
                                    :position [100.0 200.0]
                                    :radius 35.0
                                    :mass 0.2})
                (phy/apply-force [3000.0 0.0] [[75.0 194.0]] phy/default-dt))]
     (println "B1:" b1)
     {:box1 b1
      :box2 (geo/create-box {:id :box2
                             :position [300.0 225.0]
                             :width 50.0
                             :height 50.0
                             :mass 0.4})
      :box3 (geo/create-box {:id :box3
                             :position [450.0 220.0]
                             :width 50.0
                             :height 50.0
                             :mass 0.4})})))

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
     (let [db (zipmap (keys db)
                      (map #(phy/apply-physics % 0.016) (vals db)))
           b1 (:box1 db)
           b2 (:box2 db)
           b3 (:box3 db)
           collisions (test-collisions [[b1 b2] [b2 b3] [b1 b3]])]
       (if-not (empty? collisions)
         (let [colls (res/collision-response collisions phy/default-dt phy/default-gravity)
               colls (res/position-correction colls)]
           (reduce (fn [db {:keys [a b] :as col}]
                     (assoc db (:id a) a (:id b) b))
                   db
                   colls))
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
      (let [width 1000
            height 600]
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
               @bodies)]]])))))


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

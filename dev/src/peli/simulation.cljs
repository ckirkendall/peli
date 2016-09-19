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
                                    :position [200.0 100.0]
                                    :radius 50.0
                                    :mass 0.1})
                (phy/apply-force [200.0 0.0] [[175.0 94.0]] 0.016))]
     (println "B1:" b1)
     {:box1 b1
      :box2 (geo/create-box {:id :box2
                             :position [400.0 100.0]
                             :width 50.0
                             :height 50.0
                             :mass 1.0})})))

(re-frame/register-handler
 ::step
 (fn [db _]
   (if-not (:collision db)
     (let [db (zipmap (keys db)
                      (map #(phy/apply-physics % 0.016) (vals db)))
           b1 (:box1 db)
           b2 (:box2 db)
           overlap? (geo/bounds-overlap? b1 b2)
           collision (when overlap? (coll/collision b1 b2))]
       (when overlap?
         (println "BOUNDS OVERLAP" (geo/bounds b1) (geo/bounds b2)))
       (if collision
         (let [_ (println "COLLISION:" collision)
               colls (res/collision-response [collision] 0.16 phy/default-gravity)
               _ (println "COLs:" colls)
               [{:keys [a b] :as col}] (res/position-correction colls)]
           (assoc db
                  (:id a) a
                  (:id b) b
                  #_#_:collision col))
         db))
     db)))


(re-frame/register-sub
 ::box
 (fn [db [_ id]]
   (reaction (get @db id))))


(defn rad->deg [rad]
  (/ (* rad 180.0) Math/PI))


(defn draw-box [box]
  (let [[[fx fy] :as points] (geo/points box)
        pstr (str (apply str (interpose " " (map (fn [[x y]]
                                                   (str x "," y)) points)))
                           (str " " fx "," fy))]
    [:polygon {:points pstr
              :style {:fill "white"
                      :stroke "grey"
                      :stroke-width "1"}}]))

(defn draw-circle [body]
  (let [[x y] (geo/position body)]
    [:circle {:cx x :cy y :r (geo/radius body)
             :style {:fill "white"
                     :stroke "grey"
                     :stroke-width "1"}}]))

(defn bodies->svg []
  (let [box1 (re-frame/subscribe [::box :box1])
        box2 (re-frame/subscribe [::box :box2])]
    (fn []
      (let [width 600
            height 400]
        (when (and @box1 @box2)
          [:div
           [:svg {:width width
                  :height height}
            [:rect {:fill "black"
                    :x 0 :y 0
                    :width width
                    :height height}]
            [:g
             [draw-circle @box1]
             [draw-box @box2]]]])))))


(defn init []
  (re-frame/dispatch [::init])
  (go-loop []
    (<! (timeout 16))
    (re-frame/dispatch [::step])
    (recur))
  (reagent/render-component
   [bodies->svg]
   (js/document.getElementById  "myGameDiv")))

(init)

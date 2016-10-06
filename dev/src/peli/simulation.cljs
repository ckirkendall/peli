(ns peli.simulation
  (:require-macros
   [cljs.core.async.macros :refer (go go-loop)]
   [reagent.ratom :refer [reaction]])
  (:require
   [reagent.core :as reagent]
   [re-frame.db :as re-frame-db]
   [cljs.core.async :refer [<! timeout]]
   [re-frame.core :as re-frame]
   [peli.physics :as phy]
   [peli.geometry :as geo]
   [peli.collision :as coll]
   [peli.response :as res]
   [clojure.set :as s]
   [peli.phy-math :refer [sub]]))

(def width 600.0)
(def height 600.0)
(def block-size 40)

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
              (if-not (= 0 (p/inv-mass o1) (p/inv-mass o2))
                (if-let [collision (coll/collision o1 o2)]
                  (conj colls collision)
                  colls)
                colls)))
          []
          pairs))



(defn check-active [bodies rest-cnt-map]
  [rest-cnt-map bodies]
  (reduce (fn [[rest-cnt-map bodies] body]
            (let [rest-cnt (get rest-cnt-map (p/id body) 0)
                  [dx dy] (sub (p/prev-position body)
                       (p/position body))
                  dr (- (p/rotation body)
                        (p/prev-rotation body))
                  #_#__ (println dx dy dr)
                  rest-cnt (if (and (> (p/inv-mass body) 0.0)
                                    (< (js/Math.abs dx) 0.1)
                                    (< (js/Math.abs dy) 0.1)
                                    (< (js/Math.abs dr) 0.01))
                             (inc rest-cnt)
                             0)]
              [(assoc rest-cnt-map (p/id body) rest-cnt)
               (conj bodies (cond-> body
                              (= rest-cnt 0)
                              (p/active true)

                              (> rest-cnt 10)
                              (p/active false)))]))
          [rest-cnt-map []]
          bodies))


(defn apply-physics [body gravity dt]
  (-> body
      (phy/apply-gravity gravity dt)
      (phy/apply-physics dt)))

(defn step [db dt]
  (if-not (:collision db)
    (let [gravity [0.0 500.0] #_ phy/default-gravity
          body-map (:bodies db)
          [rest-cnt-map bodies] (check-active (vals body-map) (:rest-cnt-map db {}))
          body-map (zipmap (keys body-map)
                           (map #(apply-physics % gravity dt) bodies))
          [pairs matrix] (coll/generate-pairs block-size bodies)
          db (assoc db
                    :matrix matrix
                    :rest-cnt-map rest-cnt-map)
          collisions (test-collisions body-map pairs)]
      (if-not (empty? collisions)
        (let [colls (res/collision-response collisions dt gravity)
              [bodies colls imp-map] (res/solve-positions colls (:imp-map db {}))
              body-map (reduce (fn [bm body]
                                 (assoc bm (p/id body) body))
                               body-map
                               bodies)]
          (assoc db
                 :bodies body-map
                 :imp-map imp-map
                 #_#_:collision colls))
        (assoc db :bodies body-map
               #_#_:collision :hold)))
    db))


(re-frame/register-handler
 ::step
 (fn [db _]
   (step db phy/default-dt)))


(re-frame/register-sub
 ::bodies
 (fn [db _]
   (reaction (vals (:bodies @db)))))

(re-frame/register-sub
 ::matrix
 (fn [db _]
   (reaction (dissoc (:matrix @db) :pairs))))

(re-frame/register-sub
 ::frame-rate
 (fn [db _]
   (reaction (:frame-rate @db))))


(defn rad->deg [rad]
  (/ (* rad 180.0) Math/PI))

(def active-color "blue")
(def inactive-color "blue")

(defn draw-box [box]
  (let [[[fx fy] :as points] (p/points box)
        active? (p/active box)
        pstr (str (apply str (interpose " " (map (fn [[x y]]
                                                   (str x "," y)) points)))
                           (str " " fx "," fy))]
    [:polygon {:points pstr
              :style {:fill "lightgray"
                      :stroke (if active? active-color inactive-color)
                      :stroke-width "1"}}]))

(defn draw-circle [body]
  (let [[x y] (p/position body)
        r (p/radius body)
        rot (p/rotation body)
        active? (p/active body)]
    [:g {:transform (str "translate(" x " " y ") "
                         "rotate(" (rad->deg rot) " " 0 " " 0 ")")}
     [:circle {:cx 0 :cy 0 :r r
               :style {:fill "lightgray"
                       :stroke (if active? active-color inactive-color)
                       :stroke-width "1"}}]
     [:line {:x1 0 :y1 r :x2 0 :y2 0
             :style {:stroke-width "2" :stroke (if active? active-color inactive-color)}}]]))


(defn draw-matrix-box [block-key block-size]
  (let [col-idx (mod block-key 1000)
        row-idx (int (/ (- block-key col-idx) 1000))]
    [:rect {:x (* block-size col-idx)
            :y (* block-size row-idx)
            :width block-size
            :height block-size
            :style {:stroke "red"
                    :stroke-width "1"
                    :stroke-opacity "0.2"
                    :fill "transparent"}}]))

(defn draw-matrix [matrix block-size]
  [:g
   (map (fn [ky]
          ^{:key (str ky)}
          [draw-matrix-box ky block-size])
     (keys matrix))])

(defn bodies->svg []
  (let [bodies (re-frame/subscribe [::bodies])
        matrix (re-frame/subscribe [::matrix])
        frame-rate (re-frame/subscribe [::frame-rate])]
    (fn []
      (when-not (empty? @bodies)
        [:div
         [:p (str "FPS: " @frame-rate)]
         [:svg {:width width
                :height height}
          [:rect {:fill "darkgray"
                  :x 0 :y 0
                  :width width
                  :height height}]
          [draw-matrix @matrix block-size]
          [:g
           (map (fn [body]
                  (cond
                    (satifies? p/ICircle body)
                    ^{:key (:id body)} [draw-circle body]
                    (satifies? p/IPolygon body)
                    ^{:key (:id body)} [draw-box body]))
             @bodies)]]]))))

(def fr-holder (atom (vec (for [iter (range 100)] (/ 1.0 phy/default-dt)))))
(def target-fps (* 1000 phy/default-dt))

(defn average
  [numbers]
    (/ (apply + numbers) (count numbers)))

(defn set-timeout-init
  ([]
   (re-frame/dispatch [::init])
   (let [now (js/Date.now)]
     (js/window.setTimeout #(set-timeout-init now 0) 16))
   (reagent/render-component
    [bodies->svg]
    (js/document.getElementById  "myGameDiv")))
  ([time step-cnt]
   (let [start (js/Date.now)
         diff (- start time)
         frame-rate  (int (/ 1000 (+ diff 0.00001)))]
     (js/window.setTimeout #(set-timeout-init start (mod (inc step-cnt) 100))
                     target-fps)
     (swap! fr-holder assoc step-cnt frame-rate)
     (swap! re-frame.db/app-db
            (fn [db]
              (-> db
                  (assoc :frame-rate (int (average @fr-holder)))
                  (step (min 0.020 (/ diff 1000)))))))))


#_(init)

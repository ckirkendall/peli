(ns peli.simulation
  (:require
   [peli.protocols :as p]
   [peli.pixi-adapter :as adapter]
   [peli.impl.game :as game]
   [peli.impl.engine :as engine]
   [peli.impl.geometry :as geo]
   [peli.impl.physics :as phy]
   [peli.impl.collision :as coll]
   [peli.impl.frame :as frame]
   [peli.impl.phy-math :refer [sub infinity]]
   [peli.impl.text :as text]))

(def width 600.0)
(def height 600.0)
(def block-size 40)




(defn create-fps [id]
  (text/create-dynamic-label
   {:id id
    :text-fn (fn [game] (str "FPS: " (p/fps game)))
    :position [20 20]}))

(def adapter (adapter/create-adapter "myGameDiv" width height))

(def frame (frame/Frame. 0 0 width height))

(def circle1 (-> (geo/create-circle {:id :circle1
                                    :position [50.0 250.0]
                                    :radius 35.0
                                    :density 1})
                (phy/apply-force [1150.0 0.0] [[15.0 260.0]] 1000.0)))


(def box1 (geo/create-box {:id :box1
                          :position [300.0 225.0]
                          :width 50.0
                          :height 50.0
                          :density 1}))

(def box2 (geo/create-box {:id :box2
                           :position [450.0 220.0]
                           :width 50.0
                           :height 50.0
                           :density 1}))

(def base (geo/create-box {:id :bound4
                           :position [(/ width 2.0) height]
                           :width width
                           :height 10
                           :density infinity}))

(def world (game/map->World {:id :world1
                             :bodies {:circle1 circle1
                                      :box1 box1
                                      :box2 box2
                                      :bound4 base
                                      :fps-label (create-fps :fps-label)}
                             :sprites {}
                             :sounds {}
                             :frame frame
                             :gravity phy/default-gravity}))



(def game
  (atom (game/map->Game
         {:id :my-game
          :worlds {(p/id world) world}
          :block-size 50
          :fps 60
          :active-world world
          :pos-impulse-map {}
          :graphics-adapter adapter})))

(def fr-holder (atom (vec (for [iter (range 50)] 60))))


(defn average [vals]
  (/ (apply + vals) (count vals)))

(defn render [game]
  (let [adapter (-> (p/graphics-adapter game)
                    (p/render game))]
    (p/graphics-adapter game adapter)))

(defn animation-loop
  ([]
   (let [now (js/Date.now)]
     (js/window.setTimeout #(animation-loop now 0) 16)))
  ([time step-cnt]
   (let [now (js/Date.now)]
     (let [target-fps (int (/ 1000 (p/fps @game)))
           start (js/Date.now)
           diff (- start time)
           frame-rate  (Math/ceil (/ 1000 (+ diff 0.00001)))
           adapter (p/graphics-adapter @game)]
       (p/request-animation-frame
        adapter
        #(animation-loop start (mod (inc step-cnt) (count @fr-holder))))
       (swap! fr-holder assoc step-cnt frame-rate)
       (swap! game
              (fn [db]
                (-> db
                    (p/fps (int (average @fr-holder)))
                    (engine/step (min 0.020 (/ diff 1000)))
                    render)))))))

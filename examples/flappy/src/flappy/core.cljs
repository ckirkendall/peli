(ns flappy.core
  (:require [peli.engine 
             :refer [translate-coords Physics physics Gravity gravity 
                     Pen draw Collision collide overlap? check-bounds
                     apply-gravity apply-physics collide-action
                     collide-solid remove-body play-sound run-game
                     schedule-edit check-bounds Game World
                     Block TextPrompt run-game]]
            [cljs.core.async :refer (timeout put! chan)])
  (:require-macros [cljs.core.async.macros :refer (go go-loop)]))

(declare create-objects)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; BUILDING MATERIALS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defrecord Bird [id width height x y vx vy]
   Pen
  (draw [this ctx frame ch state] 
    (let [{:keys [width height x y] :as obj} (translate-coords this frame)
          img (.getElementById js/document "bird")] 
      (.drawImage ctx img x y width height)))
  
  Gravity
  (gravity [this ch state]
    (apply-gravity this))
  
  Physics 
   (physics[this time-diff board ch state]
     (apply-physics this 0 board))
  
  Collision 
   (collide [this body ch state] 
     (condp = (type body)
       Block (collide-action this body 
              {:any (fn [b]
                      (schedule-edit 
                       (fn [w]
                         (-> w
                             (update-in [:frame] #(assoc % :x 0 :y 0))
                             (assoc :bodies (create-objects "Game Over"))
                             (assoc :run-state :paused)))
                       ch 10))})
       this)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; GAME WORLD
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn create-gate [bodies]
  (let [start (+ 50 (rand-int 200))
        x (+ 200 (:x (last bodies)))
        end (+ start 100)]
    (conj bodies
     (Block. (gensym) "#007F00" 50 start x 0 [0 0 5 5])
     (Block. (gensym) "#007F00" 50 (- 400 end) x end [5 5 0 0]))))

(defn garbage-collect [ch]
  (go 
    (while true
     (<! (timeout 2500))
     (put! ch
      {:action :edit-world
       :fn (fn [w]
             (if (= (:run-state w) :running)
               (assoc w :bodies
                      (vec (filter #(> (+ (:x %) (:width %))
                                       (:x (:frame w)))
                                   (:bodies w))))
               w))}))))

(defn extend-board [ch]
  (go
   (while true
     (<! (timeout 2500))
     (put! ch
           {:action :edit-world
            :fn (fn [w]
                  (if (= (:run-state w) :running)
                    (update-in w [:bodies] #(create-gate %))
                    (:bodies w)))}))))


(defn create-objects [text]
  [(Bird. (gensym) 22 18 100 200 2 0)
   (Block. (gensym) "#007F00" 50 100 300 0 [0 0 5 5])
   (Block. (gensym) "#007F00" 50 200 300 200 [5 5 0 0])
   (TextPrompt. :start 100 50 text false {})])

(def key-actions 
  {32 {:on-down #(assoc-in % [:bodies 0 :vy] 4)}
   13 {:on-down #(-> %
                     (remove-body :start)
                     (assoc :run-state :running))}
   27 {:on-down #(assoc % :run-state :paused)}
   80 {:on-down #(do (println %) %)}})

(def world 
  (World. {:width 20000 :height 400 :img nil :color "#7F7FFF"}
          {:width 400 :height 400 :x 0 :y 0 :buffer 130}
          (create-objects "Hit Enter")
          key-actions
          :paused))

(def game (Game. {:world1 world} nil {:score 0 :health 3 :lives 10}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Run Game
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;
  
(def message-bus (run-game game "myCanvas" :world1))
(extend-board message-bus)
(garbage-collect message-bus)

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

(def game-over (TextPrompt. :game-over 100 50 "Game Over" false {}))
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
                             (update-in [:bodies] #(conj % game-over))
                             (assoc :run-state :paused)))
                       ch 1)
                      (assoc b :x 200 :y 200))})
       this)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; GAME WORLD
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def key-actions 
  {32 {:on-down #(assoc-in % [:bodies 0 :vy] 4)}
   13 {:on-down #(-> %
                     (remove-body :start)
                     (remove-body :game-over)
                     (assoc :run-state :running))}
   27 {:on-down #(assoc % :run-state :paused)}
   80 {:on-down #(do (println %) %)}})

(def world 
  (World. {:width 2000 :height 400 :img nil :color "#7F7FFF"}
          {:width 400 :height 400 :x 0 :y 0}
          [(Bird. (gensym) 22 18 200 200 2 0)
           (Block. (gensym) "#007F00" 50  200  300 0 [0 0 5 5])
           (Block. (gensym) "#007F00" 50 100 300 300 [5 5 0 0])
           (Block. (gensym) "#007F00" 50 100 500 0 [0 0 5 5])
           (Block. (gensym) "#007F00" 50 200 500 200 [5 5 0 0])           
           (Block. (gensym) "#007F00" 50 50 700 0 [0 0 5 5])
           (Block. (gensym) "#Af8500" 50 250 700 150 [5 5 0 0])
           
           (Block. (gensym) "#007F00" 50  200  1200 200 [5 5 0 0])
           (Block. (gensym) "#007F00" 50 100 1200 0 [0 0 5 5])
           (Block. (gensym) "#007F00" 50 100 1500 100 [5 5 0 0])
           (Block. (gensym) "#007F00" 50 200 1500 0 [0 0 5 5])           
           (Block. (gensym) "#007F00" 50 50 1800 50 [5 5 0 0])
           (Block. (gensym) "#Af8500" 50 250 1800 0 [0 0 5 5])
           (TextPrompt. :start 100 50 "Hit Enter" false {})]
          key-actions
          :paused))

(def game (Game. {:world1 world} nil {:score 0 :health 3 :lives 10}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Run Game
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;
  
(def message-bus (run-game game "myCanvas" :world1))


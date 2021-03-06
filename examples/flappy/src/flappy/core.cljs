(ns flappy.core
  (:require [peli.engine 
             :refer [translate-coords Physics physics Gravity gravity 
                     Pen draw Collision collide apply-gravity
                     apply-physics collide-action collide-solid
                     remove-body play-sound schedule-edit Game World
                     Block TextPrompt run-game edit-loop remove-overlay
                     Framed adjust-frame?]]
            [cljs.core.async :refer (timeout put! chan)])
  (:require-macros [cljs.core.async.macros :refer (go go-loop)]))

(declare overlays bodies ScoreGate)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Edit Actions
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn game-over [game]
  (-> game
      (assoc-in [:state :score] 0)
      (update-in [:active-world :frame] #(assoc % :x 0 :y 0))
      (assoc-in [:active-world :bodies] bodies)
      (assoc-in [:active-world :overlays] overlays)
      (assoc-in [:active-world :run-state] :paused)))

(defn cleanup-gate [world]
  (if (= (:run-state world) :paused) world
    (assoc world :bodies
      (filterv #(> (+ (:x %) (:width %)) (:x (:frame world)))
               (:bodies world)))))

(defn create-gate [world]
  (if (= (:run-state world) :paused) world
    (assoc world :bodies
      (let [start (+ 50 (rand-int 200))
            x (+ 200 (:x (last (:bodies world))))
            end (+ start 100)]
        (conj (:bodies world)
          (Block. (gensym) "#007F00" 50 start x 0 [0 0 5 5])
          (Block. (gensym) "#007F00" 50 (- 400 end) x end [5 5 0 0])
          (ScoreGate. (gensym) 10 100 (+ x 25) start))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; BUILDING MATERIALS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defrecord ScoreGate [id width height x y])

(defrecord Bird [id width height x y vx vy]
   Pen
  (draw [this ctx frame ch state] 
    (let [{:keys [width height x y]} (translate-coords this frame)
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
                      (schedule-edit game-over ch 10 :edit-game) b)})
       ScoreGate (do
                   (put! ch {:action :edit-world
                             :fn #(remove-body % (:id body))})
                   (put! ch {:action :edit-game
                             :fn #(update-in % [:state :score] inc)})
                   this)
       this))

   Framed
    (adjust-frame? [this] true))

(defrecord ScoreOverlay [id] 
  Pen
  (draw [this ctx frame ch state]
    (set! (.-textBaseline ctx) "middle")
    (set! (.-font ctx)  "12px Arial")
    (set! (.-fillStyle ctx) "#000099") 
    (.fillText ctx (str "score: " (:score state)) 20 20)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; GAME WORLD
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def bodies
  [(Bird. (gensym) 22 18 100 200 2 0)
   (Block. (gensym) "#007F00" 50 100 300 0 [0 0 5 5])
   (Block. (gensym) "#007F00" 50 200 300 200 [5 5 0 0])
   (ScoreGate. (gensym) 10 100 325 100)])

(def overlays [(ScoreOverlay. :score)
               (TextPrompt. :start 100 50 "Hit Enter" false {})])

(def key-actions 
  {32 {:on-down #(assoc-in % [:bodies 0 :vy] 4)}
   13 {:on-down #(-> %
                     (remove-overlay :start)
                     (assoc :run-state :running))}
   27 {:on-down #(assoc % :run-state :paused)}
   80 {:on-down #(do (println %) %)}})

(def world 
  (World. {:width 20000 :height 400 :img nil :color "#7F7FFF"}
          {:width 400 :height 400 :x 0 :y 0 :buffer 130}
          bodies
          overlays
          key-actions
          :paused))

(def game (Game. {:world1 world} nil {:score 0 :health 3 :lives 10}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Run Game
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;
  
(def ch (run-game game "myCanvas" :world1))
(edit-loop ch :edit-world  cleanup-gate 2500)
(edit-loop ch :edit-world  create-gate 2500)

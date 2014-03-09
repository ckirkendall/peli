(ns mario.core
  (:require [peli.engine 
             :refer [translate-coords Physics physics Gravity gravity 
                     Pen draw Collision collide overlap? check-bounds
                     apply-gravity apply-physics collide-action
                     collide-solid remove-body play-sound run-game
                     schedule-edit check-bounds Game World
                     Block TextPrompt run-game]]
            [cljs.core.async :refer (timeout put! chan)])
  (:require-macros [cljs.core.async.macros :refer (go go-loop)]))

(declare Hero BadGuy)

(defn hero-img [{:keys [vx vy]}]
  (cond
   (and (>= vx 0) (not= vy 0)) "mario-jump-right"
   (and (< vx 0) (not= vy 0)) "mario-jump-left"
   (and (> vx 0) (= vy 0)) "mario-walk-right"
   (and (< vx 0) (= vy 0)) "mario-walk-left"
   :else "mario-stand-right"))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; EDIT ACTIONS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn reward [ch]
  (fn [body]
    (play-sound "reward")
    (schedule-edit #(remove-body % (:id body)) ch 700)
    (schedule-edit #(assoc % :bodies (conj (:bodies %) body)) ch 5000)
    (put! ch {:action :edit-game :fn #(update-in % [:state :score] inc)})
    (assoc body :vy 2 :state :gone)))

(defn kill-bad-guy [ch]
  (fn [body]
    (play-sound "stomp")
    (schedule-edit #(remove-body % (:id body)) ch 1000)
    (schedule-edit #(assoc % :bodies
                      (conj (:bodies %) (assoc body :y (- (:y body) 2))))
                   ch 5000)
    (assoc body :vx 0 :height 2 :state :dead)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; BUIDLING MATERIALS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defrecord Reward [id width height x y]
  Pen
  (draw [this ctx frame ch state] 
    (let [{:keys [width height x y] :as obj} (translate-coords this frame)
          img (.getElementById js/document "coin")]
      (.drawImage ctx img x y width height)))
  Physics 
   (physics [this time-diff board ch state]
     (apply-physics this 0 board))
  
  Collision
   (collide [this body ch state]
    (if (= (:state this) :gone) this
      (condp = (type body)
        Hero (collide-action this body {:any (reward ch)})
        this))))


(defrecord Hero [id width height x y vx vy]
   Pen
  (draw [this ctx frame ch state] 
    (let [{:keys [width height x y]} (translate-coords this frame)
          img (.getElementById js/document (hero-img this))] 
      (.drawImage ctx img 7 5 19 27 x y width height)
      (set! (.-textBaseline ctx) "middle")
      (set! (.-font ctx) "12px Arial")
      (set! (.-fillStyle ctx) "#000099")
      (.fillText ctx (str "coins: "(:score state)) 20 20)))
  
  Gravity
  (gravity [this ch state]
     (apply-gravity this))
  
  Physics 
   (physics [this time-diff board ch state]
     (apply-physics this 0 board))
  
  Collision 
   (collide [this body ch state] 
     (condp = (type body)
       Block (collide-solid this body)
       BadGuy (collide-action this body {:bottom #(assoc % :vy 5)})
       this)))

(defrecord BadGuy [id width height x y vx vy]
  Pen
  (draw [this ctx frame ch state]
   (let [{:keys [width height img x y]} (translate-coords this frame)
          img (.getElementById js/document "goomba")]
      (.drawImage ctx img x y width height)))
  
  Gravity
  (gravity [this ch state]
     (apply-gravity this))
  
  Physics 
   (physics [this time-diff board ch state]
     (apply-physics this 0 board))
  
  Collision
  (collide [this body ch state]
     (condp = (type body)
       Block (-> this
               (collide-solid body)
               (collide-action body 
                 {:left #(assoc % :vx (* (:vx %) -1))
                  :right #(assoc % :vx (* (:vx %) -1))}))
       Hero (if (= (:state this) :dead) this
                (collide-action this body {:top (kill-bad-guy ch)}))
       this)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; GAME WORLD
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def key-actions 
  {39 {:on-down #(assoc-in % [:bodies 0 :vx] 2)  ;right
       :on-up #(assoc-in % [:bodies 0 :vx] 0)}
   37 {:on-down #(assoc-in % [:bodies 0 :vx] -2) ;left
       :on-up #(assoc-in % [:bodies 0 :vx] 0)}
   32 {:on-down #(update-in % [:bodies 0 :vy]    ;jump
                            (fn [vy] (if (= vy 0)
                                      (do (play-sound "jump") 5)
                                      vy)))}
   13 {:on-down #(assoc (remove-body % "start") :run-state :running)}
   27 {:on-down #(assoc % :run-state :paused)}})

(def world 
  (World. {:width 1000 :height 400 :img nil :color "#7F7FFF"}
          {:width 400 :height 400 :x 100 :y 0}
          [(Hero. (gensym) 19 27 100 200 0 0)
           (Block. (gensym) "#007F00" 200  100  0 300 [10 10 0 0])
           (Block. (gensym) "#007F00" 200 100 200 330 [0 0 0 0])
           (Block. (gensym) "#007F00" 200 100 400 300 [10 0 0 0])
           (Block. (gensym) "#007F00" 200 200 600 230 [10 10 0 0])
           
           (Block. (gensym) "#007F00" 100 50 450 250 [10 10 0 0])
           (Block. (gensym) "#Af8500" 100 24 250 250 [10 10 3 3])
           
           (Block. (gensym) "#Af8500" 100 24 350 190 [10 10 3 3])
           
           (Block. (gensym) "#007F00" 60 20 100 250 [3 3 3 3])
           
           (Block. (gensym) "#007F00" 50 30 105 270 [0 0 0 0])
           (Block. (gensym) "#007F00" 200 150 800 270 [0 10 0 0])
           (Reward. (gensym) 12 16 400 120 )
           (Reward. (gensym) 12 16 300 190 )
           (Reward. (gensym) 12 16 500 190 )
           (Reward. (gensym) 12 16 900 190 )
           (BadGuy. (gensym) 24 24 400 220 -1.5 0)
           (TextPrompt. "start" 100 50 "Hit Enter" false {})]
          key-actions
          :paused))

(def game (Game. {:world1 world} nil {:score 0 :health 3 :lives 10}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Run Game
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;  
(def message-bus (run-game game "myCanvas" :world1))


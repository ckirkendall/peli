(ns mario.core
  (:require [peli.engine 
             :refer [translate-coords Physics physics Gravity gravity 
                     Pen draw Collision collide overlap? check-bounds
                     apply-gravity apply-physics collide-action
                     collide-solid remove-body play-sound handle-keys
                     run-loop schedule-edit check-bounds Game World]]
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


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; BUIDLING MATERIALS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defrecord Block [id fill width height x y radii]
  Pen
  (draw [this ctx frame ch] 
    (let [{:keys [width height color x y radii]} (translate-coords this frame)
	      r (+ x width)
		  b (+ y height)
		  [ul ur lr ll] (or radii [0 0 0 0])]
      (if (string? fill)
        (set! (.-fillStyle ctx) fill)
        (let [pattern (.createPattern ctx fill, "repeat")]
          (set! (.-fillStyle ctx) pattern)))
      (doto ctx
	    (.beginPath)
        (.moveTo (+ x ul) y)
		(.lineTo (- r ur) y)
		(.quadraticCurveTo r y r (+ y ur))
		(.lineTo r (- b lr))
		(.quadraticCurveTo r b (- r lr) b)
		(.lineTo (+ x ll) b)
		(.quadraticCurveTo x b x (- b ll))
		(.lineTo x (+ y ul))
		(.quadraticCurveTo x y (+ x ul) y)
        (.closePath)
        (.fill)))))

(defrecord Reward [id width height x y]
  Pen
  (draw [this ctx frame ch] 
    (let [{:keys [width height x y] :as obj} (translate-coords this frame)
          img (.getElementById js/document "coin")]
      (.drawImage ctx img x y width height)))
  Physics 
   (physics [this time-diff board ch]
     (apply-physics this 0 board))
  
  Collision
   (collide [this body ch]
    (if (= (:state this) :gone) this
      (condp = (type body)
        Hero (collide-action this body 
               {:any #(do 
                       (play-sound "reward")
                       (schedule-edit (partial remove-body (:id this)) 
                                      ch 700)
                       (schedule-edit
                         (fn [w] 
                           (assoc w :bodies 
                                  (conj (:bodies w) this)))
                         ch 5000)
                       (assoc % :vy 2 :state :gone))})
        this))))


(defrecord Hero [id width height x y vx vy]
   Pen
  (draw [this ctx frame ch] 
    (let [{:keys [width height x y] :as obj} (translate-coords this frame)
          img (.getElementById js/document (hero-img this))]
      (.drawImage ctx img 7 5 19 27 x y width height)))
  
  Gravity
  (gravity [this ch]
     (apply-gravity this))
  
  Physics 
   (physics [this time-diff board ch]
     (apply-physics this 0 board))
  
  Collision 
   (collide [this body ch] 
     (condp = (type body)
       Block (collide-solid this body)
       BadGuy (do
                (collide-action this body {:bottom #(do
                                                      (play-sound "stomp")
                                                      (assoc % :vy 5))}))
       this)))

(defrecord BadGuy [id width height x y vx vy]
  Pen
  (draw [this ctx frame ch]
   (let [{:keys [width height img x y] :as obj} (translate-coords this frame)
          img (.getElementById js/document "goomba")]
      (.drawImage ctx img x y width height)))
  
  Gravity
  (gravity [this ch]
     (apply-gravity this))
  
  Physics 
   (physics [this time-diff board ch]
     (apply-physics this 0 board))
  
  Collision
   (collide [this body ch]
     (condp = (type body)
       Block (-> this
               (collide-solid body)
               (collide-action body 
                  {:left #(assoc % :vx (* (:vx %) -1))
                   :right #(assoc % :vx (* (:vx %) -1))}))
       Hero (if (= (:state this) :dead) this
              (collide-action this body 
                {:top 
                 #(do
                   (schedule-edit (partial remove-body (:id this)) ch 1000)
                   (schedule-edit
                    (fn [w] (assoc w :bodies 
                              (conj (:bodies w) 
                                    (assoc this :y (- (:y this) 2)))))
                    ch 5000)
                   (assoc % :vx 0 :height 2 :state :dead))}))
       this)))

(defrecord TextBox [id width height text hidden?]
  Pen
  (draw [this ctx frame ch]
    (when-not (:hidden? this)
      (let [[x y] [(+ (:x frame) (/ (- (:width frame) width) 2))
                   (+ (:y frame) (/ (- (:height frame) height) 2))]]
        (set! (.-strokeStyle ctx) "black")
        (set! (.-lineWidth ctx) 2)
        (.strokeRect ctx x y width height)
        (set! (.-textBaseline ctx) "middle")
        (set! (.-font ctx) "12px Arial")
        (set! (.-fillStyle ctx) "red")
        (let [[tx ty] [(+ x (- (/ width 2)
                               (/ (.-width (.measureText ctx text)) 2)))
                       (+ y (/ height 2))]]
          (.fillText ctx text tx ty))))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; GAME WORLD
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  
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
           (BadGuy. (gensym) 24 24 400 200 -1.5 0)
           (TextBox. "start" 100 50 "Hit Enter" false)]
          true))

(def game (Game. {:world1 world} world {:score 0 :health 3 :lives 10}))


(def key-actions 
  {39 {:on-down #(assoc-in % [:bodies 0 :vx] 2)  ;right
       :on-up #(assoc-in % [:bodies 0 :vx] 0)}
   37 {:on-down #(assoc-in % [:bodies 0 :vx] -2) ;left
       :on-up #(assoc-in % [:bodies 0 :vx] 0)}
   32 {:on-down #(do
                   (play-sound "jump")
                   (update-in % [:bodies 0 :vy]    ;jump
                              (fn [vy] (if (= vy 0) 5 vy))))}
   13 {:on-down #(assoc (remove-body "start" %) :pause? false)}
   27 {:on-down #(assoc % :pause? true)}})


;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Setup Game
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;
  
(defn run-game [ch]
  (handle-keys ch key-actions)
  (let [can (.getElementById js/document "myCanvas")
        ctx (.getContext can "2d")]
    (run-loop ch game ctx 0)))


(def message-bus (chan 10))
(run-game message-bus)

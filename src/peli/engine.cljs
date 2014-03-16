(ns peli.engine
  (:require [cljs.core.async :refer (timeout put! chan)])
  (:require-macros [cljs.core.async.macros :refer (go go-loop)]))

(declare overlap?)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; GAME DATA STRUCTURE
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defrecord World [board frame bodies overlays key-actions run-state])

(defrecord Game [worlds active-world state])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; PROTOCOLS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defprotocol Gravity
  (gravity [this ch state]))

(defprotocol Physics
  (physics [this time-diff board ch state]))

(defprotocol Pen 
   (draw [this ctx frame ch state]))

(defprotocol Collision 
   (collide [this body ch state]))

(defprotocol Framed 
  (in-frame? [this frame]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; DEFAULT IMPLS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(extend-protocol Physics
   object
   (physics [this time-diff board ch state] this))

(extend-protocol Gravity
   object   
   (gravity [this ch state] this))

(extend-protocol Pen
   object   
   (draw [this ctx frame ch state] this))

(extend-protocol Collision 
   object
   (collide [this body ch state] this))

(extend-protocol Framed 
   object
   (in-frame? [this frame] (overlap? this frame)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; HELPER FUNCTIONS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn overlap? [body1 body2]
  (let [{:keys [x y width height]} body1
        {x2 :x y2 :y h2 :height w2 :width} body2
        [lx ly] [(+ x width) (+ y height)]
        [lx2 ly2] [(+ x2 w2) (+ y2 h2)]]
    (and (> lx x2) (<= x lx2)
         (> ly y2) (<= y ly2))))


(defn check-bounds [n offset min max]
 (cond 
   (< n min) min
   (> (+ n offset) max) (- n (- (+ n offset) max))
   :else n))


(defn translate-coords [obj frame]
    (assoc obj :x (- (:x obj) (:x frame))
	           :y (- (:y obj) (:y frame))))


(defn apply-gravity [obj]
  (let [vy (:vy obj)]
    (assoc obj :vy (if (> vy -5) (- vy 0.2) vy))))


(defn apply-physics [obj time-dif board]
  (let [{:keys [height width x y vx vy]} obj]
    (assoc obj :x (check-bounds (+ x vx) width 0 (:width board))
               :y (check-bounds (- y vy) height 0 (:height board)))))


(defn collide-action [{:keys [height width x y vx vy] :as body1} 
                     {x2 :x y2 :y h2 :height w2 :width :as body2}
                      actions]
  (let [ox (- x vx)
        oy (+ y vy)
        ox2 (- x2 (get body2 :vx 0))
        oy2 (+ y2 (get body2 :vy 0))
        [lx ly] [(+ ox width) (+ oy height)]
        [lx2 ly2] [(+ ox2 w2) (+ oy2 h2)]]
    (cond-> body1
     (and (<= ly oy2) (:bottom actions)) ((:bottom actions)) 
     (and (<= lx ox2) (:right actions)) ((:right actions)) 
     (and (>= oy ly2) (:top actions)) ((:top actions))
     (and (>= ox lx2) (:left actions)) ((:left actions))
     (and (:any actions)
          (or (<= ly oy2) (<= lx ox2)
              (>= oy ly2) (>= ox lx2))) ((:any actions)))))


(defn collide-solid [{:keys [height width x y vx vy] :as body1} 
                     {x2 :x y2 :y h2 :height w2 :width :as body2}]
  (collide-action body1 body2 
    {:bottom #(assoc % :y (- y2 height 0.1) :vy 0)
     :right #(assoc % :x (- x2 width 0.1))
     :top #(assoc % :y (+ y2 h2 0.1) :vy 0)
     :left #(assoc % :x (+ x2 w2 0.1))}))

(defn remove-body [w id]
  (assoc w :bodies (vec (filter #(not= id (:id %)) (:bodies w)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; COMMON BUIDLING MATERIALS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defrecord Block [id fill width height x y radii]
  Pen
  (draw [this ctx frame ch state] 
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

(defrecord TextPrompt [id width height text hidden? options]
  Pen
  (draw [this ctx frame ch state]
    (when-not (:hidden? this)
      (let [[x y] [(/ (- (:width frame) width) 2)
                   (/ (- (:height frame) height) 2)]]
        (set! (.-fillStyle ctx) (get options :background-color "#cfcfcf"))
        (.fillRect ctx x y width height)
        (set! (.-strokeStyle ctx) (get options :border-color "#000099"))
        (set! (.-lineWidth ctx) 2)
        (.strokeRect ctx x y width height)
        (set! (.-textBaseline ctx) "middle")
        (set! (.-font ctx) (get options :font "12px Arial"))
        (set! (.-fillStyle ctx) (get options :font-color "#000099"))
        (let [[tx ty] [(+ x (- (/ width 2)
                               (/ (.-width (.measureText ctx text)) 2)))
                       (+ y (/ height 2))]]
          (.fillText ctx text tx ty)))))
  Framed
   (in-frame? [this frame] true))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; MAIN ENGINE
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn play-sound [id]
  (.play (.getElementById js/document id)))


(defn handle-collision [body bodies ch state]
  (reduce #(collide %1 %2 ch state) 
          body (filter #(and (not= (:id body) (:id %))
                                  (overlap? body %))
                       bodies)))

(defn run-physics [world ch state]
  (let [{fx :x fy :y  fw :width fh :height} (:frame world)
             nx (- fx (/ fw 2))
             nw (* fw 2)
             ny (- fy (/ fh 2))
             nh (* fh 2)
             expanded-frame {:x nx :y ny :width nw :height nh}
             nbodies (for [body (:bodies world)]
                       (if (in-frame? body expanded-frame)
                         (-> body
                             (gravity ch state)
                             (physics 0 (:board world) ch state))
                         body))]
    (assoc world :bodies
           (vec (for [body nbodies]
                  (handle-collision body (filter #(in-frame? % expanded-frame)
                                                 nbodies) ch state))))))


(defn draw-world [world ctx ch state]
  (set! (.-fillStyle ctx) (get-in world [:board :color]))
  (.fillRect ctx 0 0 (get-in world [:frame :width]) 
                     (get-in world [:frame :height]))
  (doseq [body (:bodies world)]
    (if (in-frame? body (:frame world))
      (draw body ctx (:frame world) ch state)))
  (doseq [overlay (:overlays world)]
    (draw overlay ctx (:frame world) ch state))
  world)


(defn get-key-code [event]
  (let [e (if event event (.-event js/window))
        code (.-keyCode e)]
    (if (and (.-charCode e) (= code 0))
      (.-charCode e)
      code)))


(defn handle-keys [ch actions]
  (let [on-down (set (filter #(:on-down (get actions %)) (keys actions)))
        on-up (set (filter #(:on-up (get actions %)) (keys actions)))]
    (set! (.-onkeydown js/document) 
       #(let [code (get-key-code %)]
          (if (on-down code)
            (put! ch {:action :edit-world 
                      :fn (get-in actions [code :on-down])}))))
    (set! (.-onkeyup js/document) 
       #(let [code (get-key-code %)]
          (if (on-up code)
            (put! ch {:action :edit-world
                      :fn (get-in actions [code :on-up])}))))))



(defn adjust-frame [world]
  (let [{:keys [x y width height buffer]} (:frame world)
        dw (or buffer (* width .2))
        dh (or buffer (* height .2))
        tx (+ x dw)
        lx (- (+ x width) dw)
        ty (+ y dh)
        ly (- (+ y height) dh)
        {hx :x hy :y} (get-in world [:bodies 0])
        nworld (assoc world :frame
                 (cond-> (:frame world)
                    (< hx tx) (assoc :x (- x (- tx hx)))
                    (> hx lx) (assoc :x (+ x (- hx lx)))
                    (< hy ty) (assoc :y (- y (- ty hy)))
                    (> hy ly) (assoc :y (+ y (- hy ly)))))
        {:keys [x y width height]} (:frame nworld)]
    (assoc nworld :frame
      (assoc (:frame nworld)
        :x (check-bounds x width 0 (get-in nworld [:board :width]))
        :y (check-bounds y height 0 (get-in nworld [:board :height]))))))
      

(defn draw-action [ch world state ctx]
  (if (= (:run-state world) :paused)
    (-> world
        (adjust-frame)
        (draw-world ctx ch state))
    (-> world
        (run-physics ch state)
        (adjust-frame)
        (draw-world ctx ch state))))


(defn schedule-edit
  ([f ch timing] (schedule-edit f ch timing nil))
  ([f ch timing type]
     (let [action (or type :edit-world)]
       (go (<! (timeout timing))
           (put! ch {:action action :fn f})))))


(defn edit-loop [ch type func timing]
  (go 
    (while true
      (<! (timeout timing))
      (put! ch {:action type :fn func}))))


(defn run-loop [ch game ctx world-id]
  (put! ch {:action :switch-world :data world-id})
  ;;25 FPS
  (go 
    (while true
     (<! (timeout 25))
     (put! ch {:action :draw-world})))
  
  ;;action loop
  (go-loop [g game]
    (let [msg (<! ch)] 
      (case (:action msg)
        :draw-world (recur
                     (assoc g
                       :active-world
                       (draw-action ch (:active-world g) (:state g) ctx)))
        :edit-world (recur (assoc g
                             :active-world
                             ((:fn msg) (:active-world g))))
        :edit-game (recur ((:fn msg) g))
        :switch-world (recur (let [world (get-in g [:worlds (:data msg)])]
                               (when (:key-actions world)
                                 (handle-keys ch (:key-actions world)))
                               (assoc g :active-world world)))
        (recur g)))))

(defn run-game [game canvas-id world-id]
  (let [ch (chan)
        can (.getElementById js/document canvas-id)
        ctx (.getContext can "2d")]
    (run-loop ch game ctx world-id)
    ch))

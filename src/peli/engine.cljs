(ns peli.engine
  (:require [cljs.core.async :refer (timeout put! chan)])
  (:require-macros [cljs.core.async.macros :refer (go go-loop)]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; PROTOCOLS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defprotocol Gravity
  (gravity [this ch]))

(defprotocol Physics
  (physics [this time-diff board ch]))

(defprotocol Pen 
   (draw [this ctx frame ch]))

(defprotocol Collision 
   (collide [this body ch]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; DEFAULT IMPLS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(extend-protocol Physics
   object
   (physics [this time-diff board ch] this))

(extend-protocol Gravity
   object   
   (gravity [this ch] this))

(extend-protocol Pen
   object   
   (draw [this ctx frame ch] this))

(extend-protocol Collision 
   object
   (collide [this body ch] this))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; HELPER FUNCTIONS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn overlap? [body1 body2]
  (let [{:keys [x y width height]} body1
           [lx ly] [(+ x width) (+ y height)]
           x2 (:x body2)
           y2 (:y body2)
           h2 (:height body2)
           w2 (:width body2)
           [lx2 ly2] [(+ x2 w2) (+ y2 h2)]]
    (or (and (>= x x2) (<= x lx2)
             (>= y y2) (<= y ly2))
        (and (<= lx lx2) (>= lx x2)
             (<= ly ly2) (>= ly y2))
        (and (<= lx lx2) (>= lx x2) 
             (>= y y2) (<= y ly2))
        (and (>= x x2) (<= x lx2)
             (<= ly ly2) (>= ly y2))
        (and (>= ly y2) (<= y y2)
             (>= x x2) (<= x lx2))
        (and (>= ly y2) (<= y y2)
             (<= lx lx2) (>= lx x2)))))


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
     (and (< ly oy2) (:bottom actions)) ((:bottom actions)) 
     (and (< lx ox2) (:right actions)) ((:right actions)) 
     (and (> oy ly2) (:top actions)) ((:top actions))
     (and (> ox lx2) (:left actions)) ((:left actions))
     (and (:any actions)
          (or (< ly oy2) (< lx ox2)
              (> oy ly2) (> ox lx2))) ((:any actions)))))


(defn collide-solid [{:keys [height width x y vx vy] :as body1} 
                     {x2 :x y2 :y h2 :height w2 :width :as body2}]
  (collide-action body1 body2 
    {:bottom #(assoc % :y (- y2 height 0.1) :vy 0)
     :right #(assoc % :x (- x2 width 0.1))
     :top #(assoc % :y (+ y2 h2 0.1) :vy 0)
     :left #(assoc % :x (+ x2 w2 0.1))}))

(defn remove-body [id w]
  (assoc w :bodies (vec (filter #(not= id (:id %)) (:bodies w)))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; MAIN ENGINE
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn play-sound [id]
  (.play (.getElementById js/document id)))

(defn run-physics [world ch]
  (assoc world :bodies
    (vec
     (for [body (:bodies world)]
      (-> body
          (gravity ch)
          (physics 0 (:board world ch)))))))


(defn handle-collisions [world ch]
  (assoc world :bodies
    (vec 
     (for [body (:bodies world)]
      (reduce #(collide %1 %2 ch) 
              body (filter #(and (not (identical? body %))
                                 (overlap? body %))
                             (:bodies world)))))))



(defn draw-world [world ctx ch]
  (set! (.-fillStyle ctx) (get-in world [:board :color]))
  (.fillRect ctx 0 0 (get-in world [:frame :width]) 
                     (get-in world [:frame :height]))
  (doseq [body (:bodies world)]
    (if (overlap? body (:frame world))
      (draw body ctx (:frame world) ch)))
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
    (println on-down on-up)
    (set! (.-onkeydown js/document) 
       #(let [code (get-key-code %)]
          (if (on-down code)
            (put! ch {:action :edit 
                      :fn (get-in actions [code :on-down])}))))
    (set! (.-onkeyup js/document) 
       #(let [code (get-key-code %)]
          (if (on-up code)
            (put! ch {:action :edit 
                      :fn (get-in actions [code :on-up])}))))))



(defn adjust-frame [world]
  (let [{:keys [x y width height]} (:frame world)
        dw (* width .2)
        dh (* height .2)
        tx (+ x dw)
        lx (- (+ x width) dw)
        ty (+ y dh)
        ly (- (+ y height) dh)
        {hx :x hy :y} (get-in world [:bodies 0])
        nworld (assoc world :frame
                 (cond-> (:frame world)
                    (< hx tx) (assoc :x (- x (- tx hx)))
                    (> hx lx) (assoc :x (+ x (- hx lx)))
                    (< hy ty) (assoc :x (- y (- ty hy)))
                    (> hy ly) (assoc :x (+ y (- hy ly)))))
        {:keys [x y width height]} (:frame nworld)]
    (assoc nworld :frame
      (assoc (:frame nworld)
        :x (check-bounds x width 0 (get-in nworld [:board :width]))
        :y (check-bounds y height 0 (get-in nworld [:board :height]))))))
      

(defn draw-action [ch world ctx]
  (-> world
    (run-physics ch)
    (handle-collisions ch)
    (adjust-frame)
    (draw-world ctx ch)))



(defn schedule-edit [f ch timing]
  (go (<! (timeout timing))
      (put! ch {:action :edit :fn f})))

(defn run-loop [ch world ctx cnt]
  ;;25 FPS
  (go 
    (while true
     (<! (timeout 25))
     (put! ch {:action :draw-world})))
  
  ;;action loop
  (go-loop [w world c cnt]
    (let [msg (<! ch)]
      (when (< c 10000) 
        (case (:action msg)
          :draw-world (recur (draw-action ch w ctx) (inc c))
          :edit (recur ((:fn msg) w) (inc c))
          (recur w (inc c)))))))


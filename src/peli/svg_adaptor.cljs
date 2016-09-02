(ns peli.svg-adaptor
  (:require
   [peli.engine :as peli]
   [cljs.core.async :refer (timeout put! chan)]
   [re-frame.core :as re-frame]))

;; ---------------------------------------------------------------------
;; Helper Functions

(defn play-sound [id]
  (.play (.getElementById js/document id)))


;; ---------------------------------------------------------------------
;; Common Building Materials

(defn rounded-rect [fill width height x y radii]
  (let [[ul ur lr ll] (or radii [0 0 0 0])]
      [:path {:d (str "M" (+ x ul) "," y
                      "h" (- width ul ur)
                      "a" ur "," ur " 0 0 1 " ur "," ur
                      "v" (- height ur lr)
                      "a" lr "," lr " 0 0 1 " (- lr) "," lr
                      "h" (- (+ lr ll) width)
                      "a" ll "," ll " 0 0 1 " (- ll) "," (- ll)
                      "v" (- (+ ul ll) height)
                      "a" ul "," ul " 0 0 1 " ul "," (- ul)
                      "z")
              :fill fill}]))


(defrecord Block [id fill width height x y radii]
  peli/Pen
  (draw [this game]
    (rounded-rect fill width height x y radii)))


(defrecord TextPrompt [id width height text hidden? options]
  peli/Pen
  (draw [this game]
    (when-not (:hidden? this)
      (let [[x y] [(/ (- (:width (peli/frame game)) width) 2)
                   (/ (- (:height (peli/frame game)) height) 2)]
            [ul ur lr ll] [5 5 5 5]]
        [:g
         (rounded-rect "#dfdfdf" width height x y [5 5 5 5])
         [:text {:style {:font (:font options "15px Arial")
                         :stroke "#6666dd"
                         :font-color (:font-color options "#000099")}
                 :x (+ x 22)
                 :y (+ y 27)}
          text]]))))

;; ---------------------------------------------------------------------
;; Draw

(defn create-sprite-defs [sprites]
  [:defs
   (for [[key {:keys [img width height x y]}] sprites]
     [:pattern {:key key :id (name key) :width width :height height}
      [:image {:xlinkHref img :x (or x 0) :y (or y 0)
               :width  width :height height}]])])


(defn draw-body [id]
  (let [body (re-frame/subscribe [:peli/entity id])]
    (when-not (:hidden @body)
      [peli/draw @body])))


(defn draw-solids []
  (let [bodies (re-frame/subscribe [:peli/solids])]
    [:g
     (for [body-id @bodies]
       [:g {:key body-id}
        [draw-body body-id]])]))

(defn draw-characters []
  (let [bodies (re-frame/subscribe [:peli/characters])]
    (fn []
      [:g
       (for [body-id @bodies]
         [:g {:key body-id}
          [draw-body body-id]])])))

(defn draw-overlays []
  (let [bodies (re-frame/subscribe [:peli/overlays])]
    (fn []
      [:g {:key :overlays}
       (for [body-id @bodies]
         [:g {:key body-id}
          [draw-body body-id]])])))

(defn draw-world []
  (let [board (re-frame/subscribe [:peli/board])
        sounds (re-frame/subscribe [:peli/sounds])
        frame (re-frame/subscribe [:peli/frame])
        sprites (re-frame/subscribe [:peli/sprites])]
    (fn []
      (let [{:keys [x y width height]} @frame]
        [:div
         [:span
          (for [[key url] @sounds]
            [:audio {:key key :id (name key) :src url}])]
         [:svg {:width width
                :height height}
          [create-sprite-defs @sprites]
          [:rect {:fill (:color @board)
                  :x 0 :y 0
                  :width width
                  :height height}]
          [:g {:transform (str "translate(" (* -1 x) "," (* -1 y) ")")}
           [draw-solids]
           [draw-characters]
           [draw-overlays]]]]))))

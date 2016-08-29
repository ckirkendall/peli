(ns peli.play
  (:require [peli.svg-adaptor :as svg]
            [peli.engine :as peli]
            [peli.time-debugger :as debugger]
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
  (fn [{:keys [id] :as body}]
    (peli/play-sound "reward")
    (peli/schedule-action ch 700 :hide id)
    #_(peli/schedule-action ch 5000 :show id)
    (peli/send-action ch :update-state #(update % :score inc))
    (assoc body :vy 2 :state :gone)))

(defn kill-bad-guy [ch]
  (fn [{:keys [id] :as body}]
    (peli/play-sound "stomp")
    (peli/schedule-action ch 500 :hide id)
    (peli/schedule-action ch 10 :update-entity id #(assoc % :y (- (:y body) 2)))
    (assoc body :vx 0 :height 10 :state :dead)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; BUIDLING MATERIALS
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defrecord Reward [id width height x y]
  peli/Pen
  (draw [this game ch]
    (let [img (.getElementById js/document "coin")]
       [:rect {:x x :y y :width width :height height
               :style {:fill "url(#coin)"}}]))
  peli/Physics
   (physics [this time-diff game ch]
     (peli/apply-physics this game))

  peli/Collision
   (collide [this body game ch]
    (if (= (:state this) :gone) this
      (condp = (type body)
        Hero (peli/collide-action this body {:any (reward ch)})
        this))))


(defrecord Hero [id width height x y vx vy]
  peli/Pen
  (draw [this game ch]
    [:g [:rect {:x x :y y :width width :height height
                :style {:fill (str "url(#" (hero-img this) ")")}}]
     [:text {:x (+ (:width (peli/frame game)) 20)
             :y (+ (:height (peli/frame game)) 20)
             :style {:font "12px Arial"
                     :font-color "black"}}
      (str "coins: " (:score (peli/state game)))]])

  peli/Gravity
  (gravity [this game ch]
     (peli/apply-gravity this))

  peli/Physics
   (physics [this time-diff game ch]
     (peli/apply-physics this game))

  peli/Collision
   (collide [this body game ch]
     (condp = (type body)
       svg/Block (peli/collide-solid this body)
       BadGuy (peli/collide-action this body {:bottom #(assoc % :vy 5)})
       this)))


(defrecord BadGuy [id width height x y vx vy]
  peli/Pen
  (draw [this game ch]
    [:rect {:x x :y y :width width :height height
            :style {:fill "url(#goomba)"}}])

  peli/Gravity
  (gravity [this game ch]
     (peli/apply-gravity this))

  peli/Physics
   (physics [this time-diff game ch]
     (peli/apply-physics this game))

  peli/Collision
  (collide [this body game ch]
    (condp = (type body)
      svg/Block (-> this
                    (peli/collide-solid body)
                    (peli/collide-action body
                                         {:left #(assoc % :vx (* (:vx %) -1))
                                          :right #(assoc % :vx (* (:vx %) -1))}))
      Hero (if (= (:state this) :dead) this
               (peli/collide-action this body {:top (kill-bad-guy ch)}))
      this)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; GAME WORLD
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def key-actions
  {39 {:on-down [[:update-entity :hero #(assoc % :vx 2)]] ;right
       :on-up [[:update-entity :hero #(assoc % :vx 0)]]}
   37 {:on-down [[:update-entity :hero #(assoc % :vx -2)]] ;left
       :on-up [[:update-entity :hero #(assoc % :vx 0)]]}
   32 {:on-down [[:update-entity :hero #(if (zero? (:vy %))
                                           (do (peli/play-sound "jump")
                                               (assoc % :vy 7 ))
                                           %)]]}
   13 {:on-down [[:hide :start] [:unpause]]}
   27 {:on-down [[:pause]]}
   68 {:on-down [[:debug]]}})

(def world
  (peli/World. {:width 1000 :height 400 :img nil :color "#72BCD4"}
          {:width 600 :height 400 :x 100 :y 0}
          [:b1 :b2 :b3 :b4 :b6 :b7 :b8 :b9 :b10]
          [:hero :bad1 :r1 :r2 :r3 :r4]
          [:start]
          :hero
          (into {}
                (map (fn [item]
                       [(:id item) item])
                  [(Hero. :hero 19 27 100 200 0 0)
                   (svg/Block. :b1 "#007F00" 200  100  0 300 [10 10 0 0])
                   (svg/Block. :b2 "#007F00" 200 100 200 330 [0 0 0 0])
                   (svg/Block. :b3 "#007F00" 200 100 400 300 [10 0 0 0])
                   (svg/Block. :b4 "#007F00" 200 200 600 230 [10 10 0 0])

                   (svg/Block. :b5 "#007F00" 100 50 450 250 [10 10 0 0])
                   (svg/Block. :b6 "#Af8500" 100 24 250 250 [10 10 3 3])

                   (svg/Block. :b7 "#Af8500" 100 24 350 190 [10 10 3 3])

                   (svg/Block. :b8 "#007F00" 60 20 100 250 [3 3 3 3])

                   (svg/Block. :b9 "#007F00" 50 30 105 270 [0 0 0 0])
                   (svg/Block. :b10 "#007F00" 200 150 800 270 [0 10 0 0])
                   (Reward. :r1 12 16 400 120 )
                   (Reward. :r2 12 16 300 190 )
                   (Reward. :r3 12 16 500 190 )
                   (Reward. :r4 12 16 900 190 )
                   (BadGuy. :bad1 24 24 400 220 -1.5 0)
                   (svg/TextPrompt. :start 100 50 "Hit Enter" false {})]))
          {:mario-stand-right  {:img "http://funscript.info/samples/mario/mariostandright.gif"
                               :width 35 :height 35 :x -5 :y -3}
           :mario-jump-right  {:img "http://funscript.info/samples/mario/mariojumpright.gif"
                               :width 35 :height 35 :x -5 :y -3}
           :mario-jump-left  {:img "http://funscript.info/samples/mario/mariojumpleft.gif"
                               :width 35 :height 35 :x -5 :y -3}
           :mario-walk-right  {:img "http://funscript.info/samples/mario/mariowalkright.gif"
                               :width 35 :height 35 :x -5 :y -3}
           :mario-walk-left  {:img "http://funscript.info/samples/mario/mariowalkleft.gif"
                               :width 35 :height 35 :x -5 :y -3}

           :goomba {:img "http://www.dan-dare.org/Dan%20Mario/GoombaMediumAni.gif"
                    :width 24 :height 24}
           :coin {:img "http://themushroomkingdom.net/images/ani/smb3/ani_smb3coin.gif"
                  :width 14 :height 16}}
          {:jump "http://themushroomkingdom.net/sounds/wav/smw/smw_jump.wav"
           :stomp "http://themushroomkingdom.net/sounds/wav/smw/smw_stomp.wav"
           :reward "http://themushroomkingdom.net/sounds/wav/smw/smw_coin.wav"}
          key-actions
          :paused))

(def game-config (peli/Game. {:world1 world} nil {:score 0 :health 3 :lives 10}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Run Game
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defonce game-state (svg/svg-game game-config))

(defonce game (peli/init-game game-state :world1 true))

(peli/render-game game "myGameDiv")

(debugger/init-debugger (:debug-ch game)
                        game-state
                        "debugger"
                        nil)

(ns peli.impl.frame
  (:require [peli.protocols :as p]))


(defrecord Frame. [x y width height]
  IFrame
  (extended-bounds [{:keys [x y width height]}]
    [[(- x (* width 0.5)) (- y (* height 0.5))]
     [(+ x (* width 1.5) (+ y (* height 1.5)))]])

  IBounds
  (bounds [{:keys [x y width height]}]
    [[x y] [(+ x width) (+ y height)]]))

(defn adjust-frame [game]
  (if (p/camera-focus game)
    (let [{:keys [x y width height buffer]} (p/frame game)
          dw (or buffer (* width .2))
          dh (or buffer (* height .2))
          tx (+ x dw)
          lx (- (+ x width) dw)
          ty (+ y dh)
          ly (- (+ y height) dh)
          [x y] (p/camera-focus game)
          nframe (cond-> (frame game)
                   (< hx tx) (assoc :x (- x (- tx hx)))
                   (> hx lx) (assoc :x (+ x (- hx lx)))
                   (< hy ty) (assoc :y (- y (- ty hy)))
                   (> hy ly) (assoc :y (+ y (- hy ly))))
          {:keys [x y width height]} nframe
          nframe (assoc nframe
                        :x (check-bounds x width 0 (:width (board game)))
                        :y (check-bounds y height 0 (:height (board game))))]
      (p/frame game nframe))
    game))

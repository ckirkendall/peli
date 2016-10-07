(ns peli.impl.frame
  (:require [peli.protocols :as p]))


(defrecord Frame [x y width height]
  ;; We use and extended bounds here
  p/IBounds
  (bounds [{:keys [x y width height]}]
    [[(- x (* width 0.5)) (- y (* height 0.5))]
     [(+ x (* width 1.5)) (+ y (* height 1.5))]]))

(defn check-bounds [n offset min max]
  (cond
    (< n min) min
    (> (+ n offset) max) (- n (- (+ n offset) max))
    :else n))


(defn adjust-frame [game]
  (if (p/camera-focus game)
    (let [{:keys [x y width height buffer]} (p/frame game)
          dw (or buffer (* width 0.2))
          dh (or buffer (* height 0.2))
          tx (+ x dw)
          lx (- (+ x width) dw)
          ty (+ y dh)
          ly (- (+ y height) dh)
          [hx hy] (p/camera-focus game)
          nframe (cond-> (p/frame game)
                   (< hx tx) (assoc :x (- x (- tx hx)))
                   (> hx lx) (assoc :x (+ x (- hx lx)))
                   (< hy ty) (assoc :y (- y (- ty hy)))
                   (> hy ly) (assoc :y (+ y (- hy ly))))
          {:keys [x y width height]} nframe
          nframe (assoc nframe
                        :x (check-bounds x width 0 (:width (p/board game)))
                        :y (check-bounds y height 0 (:height (p/board game))))]
      (p/frame game nframe))
    game))

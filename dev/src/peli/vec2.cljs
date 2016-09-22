(ns peli.vec2)

(defn dot [[x1 y1] [x2 y2]]
  (+ (* x1 x2) (* y1 y2)))

(defn sub
  ([[x1 y1]]
   [(* -1.0 x1) (* -1.0 y1)])
  ([[x1 y1] [x2 y2]]
   [(- x1 x2) (- y1 y2)]))

(defn sub-vr [[x y] r]
  [(- x r) (- y r)])

(defn add [[x1 y1] [x2 y2]]
   [(+ x1 x2) (+ y1 y2)])

(defn add-vr [[x y] r]
  [(+ x r) (+ y r)])

(defn mul-vr [[x y] r]
  [(* x r) (* y r)])

(defn mul-rv [r [x y]]
  [(* x r) (* y r)])

(defn mmul42 [[[a b] [c d]] [x y]]
  [(+ (* a x) (* b y)) (+ (* c x) (* d y))])

(defn dist-sqr
  ([p1 p2] (dist-sqr (sub p1 p2)))
  ([[x y]]
   (+ (* x x) (* y y))))

(defn cross-rv [r [x y]]
  [(* -1.0 r y) (* r x)])

(defn cross-vr [[x y] r]
  [(* r y) (* -1.0 r x)])

(defn cross-vv [[x1 y1] [x2 y2]]
  (- (* x1 y2) (* x2 y1)))

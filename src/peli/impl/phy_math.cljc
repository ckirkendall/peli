(ns peli.impl.phy-math)

(def epsilon 0.0001)

(def infinity
  #?(:clj Double/POSITIVE_INFINITY
     :cljs js/Number.POSITIVE_INFINITY))

(def neg-infinity
  #?(:clj Double/NEGATIVE_INFINITY
     :cljs js/Number.NEGATIVE_INFINITY))

(defn abs [val] (Math/abs val))

(defn sqrt [val] (Math/sqrt val))

(defn floor [val] (Math/floor val))

(defn ceil [val] (Math/ceil val))

(defn =* [a b]
  (<=  (abs (- a b)) epsilon))

(defn perp [[x1 y1]]
  [(* -1.0 y1) x1])

(defn clamp [val min max]
  (cond
    (< val min) min
    (> val max) max
    :else val))

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

(defn div-vr [[x y] r]
  [(/ x r) (/ y r)])

(defn mmul42 [[[a b] [c d]] [x y]]
  [(+ (* a x) (* b y)) (+ (* c x) (* d y))])

(defn dist-sqr
  ([p1 p2] (dist-sqr (sub p1 p2)))
  ([[x y]]
   (+ (* x x) (* y y))))

(defn dist
  ([[x y]]
   (sqrt (+ (* x x) (* y y))))
  ([p1 p2]
   (dist (sub p1 p2))))

(defn cross-rv [r [x y]]
  [(* -1.0 r y) (* r x)])

(defn cross-vr [[x y] r]
  [(* r y) (* -1.0 r x)])

(defn cross-vv [[x1 y1] [x2 y2]]
  (- (* x1 y2) (* x2 y1)))

(defn transpose [[[a b] [c d]]]
  [[a c]
   [b d]])

(defn normalize [[x y :as vec2]]
  (let [len (dist vec2)
        inv-len (if (> len 0.0001) (/ 1 len) 0)]
    [(* x inv-len) (* y inv-len)]))

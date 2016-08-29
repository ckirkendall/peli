(ns peli.engine-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [peli.engine :as engine]))

(deftest generate-collision-list-test
  (testing "generating pairs from a collision matrix"
    (let [matrix [[nil #{:a :b :c} #{:d :a :c}]
                  [nil #{:b :e :c} nil]
                  [nil nil nil]]]
      (is
       (= #{#{:a :b}
            #{:a :c}
            #{:b :c}
            #{:a :d}
            #{:c :d}
            #{:e :c}
            #{:e :b}}
          (engine/generate-collision-list matrix))))))

(def test-world
  {:solids [:a :b :c]
   :registry {:a {:id :a :x 0 :y 0 :width 75 :height 75}
              :b {:id :b :x 75 :y 0 :width 75 :height 75}
              :c {:id :c :x 75 :y 75 :width 75 :height 75}}
   :block-size 50
   :board {:width 200 :height 200}})

(deftest init-collision-matrix-test
  (testing "initializing collision matrix"
    (is (= [[#{:a} #{:a :b} #{:b} nil]
            [#{:a} #{:a :b :c} #{:b :c} nil]
            [nil #{:c} #{:c} nil]
            [nil nil nil nil]]
           (engine/init-collision-matrix test-world)))))

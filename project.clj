(defproject peli "0.1.0-SNAPSHOT"
  :description "simple 2d game engine"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]]
  :source-paths ["src"]
  :test-paths ["test"]
  :profiles {:dev {:plugins [[com.cemerick/austin "0.1.3"]
                             [com.cemerick/clojurescript.test "0.2.1"]
                             [lein-cljsbuild "1.0.2"]]
                   :cljsbuild {:builds [{
                               :source-paths ["src" "test"]
                               :compiler {
                                          :output-to "target/main.js" 
                                          :optimizations :whitespace
                                          :pretty-print true}
                                         }]
                               :test-commands {"unit-tests" ["phantomjs"
                                                             :runner
                                                             "target/main.js"]}}}})


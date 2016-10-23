(defproject peli "0.2.0-SNAPSHOT"
  :description "simple 2d game engine"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.227" :scope "provided"]
                 [cljsjs/react "15.3.1-0"]
                 [re-frame "0.8.0"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [devcards "0.2.1-7"]
                 [net.mikera/core.matrix "0.55.0"]
                 [seesaw "1.4.5"]
                 [org.clojure/core.async "0.2.395"]]

  :source-paths ["src"]
  :test-paths ["test"]
  :doo {:build "test"}
  :profiles {:dev {:dependencies [[cljsjs/pixi "3.0.10-0"]]
                   :plugins [[lein-cljsbuild "1.1.4"]
                             [lein-figwheel "0.5.6"]
                             [lein-doo "0.1.7"]]
                   :figwheel {:css-dirs ["dev/resources/public/css"]
                              :server-port 3450}
                   :source-paths ["src" "dev/src"]
                   :resource-paths ["resources" "dev/resources"]
                   :cljsbuild
                   {:builds [{:id "dev"
                              :figwheel true
                              :source-paths ["src" "dev/src"]
                              :compiler {:asset-path "js/out"
                                         :output-to "dev/resources/public/js/main.js"
                                         :output-dir "dev/resources/public/js/out"
                                         :main peli.simulation
                                         :optimizations :none
                                         :source-map-timestamp true
                                         :source-map true}}]}}})

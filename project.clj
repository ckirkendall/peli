(defproject peli "0.2.0-SNAPSHOT"
  :description "simple 2d game engine"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.145" :scope "provided"]
                 [cljsjs/react "0.14.0-0"]
                 [reagent "0.5.1" :excludes [cljsjs/react]]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [devcards "0.2.0-8"]]

  :source-paths ["src"]
  :test-paths ["test"]
  :doo {:build "test"}
  :profiles {:dev {:plugins [[lein-cljsbuild "1.1.0"]
                             [lein-figwheel "0.4.1"]
                             [lein-doo "0.1.6-SNAPSHOT"]]
                   :resource-paths ["dev/resources"]
                   :figwheel {:css-dirs ["dev/resources/public/css"]
                              :server-port 3450}
                   :cljsbuild
                   {:builds [{:id "dev"
                              :figwheel true
                              :source-paths ["src" "dev/src"]
                              :compiler {:asset-path "js/out"
                                         :output-to "dev/resources/public/js/main.js"
                                         :output-dir "dev/resources/public/js/out"
                                         :main peli.play
                                         :optimizations :none
                                         :source-map-timestamp true
                                         :source-map true}}]}}})

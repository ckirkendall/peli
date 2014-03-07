(defproject flappy "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :jvm-opts ^:replace ["-Xmx1g" "-server"]

  :dependencies [[kioo "0.4.0-SNAPSHOT"]
                 [peli "0.1.0-SNAPSHOT"]
                 [org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]]

  :plugins [[lein-cljsbuild "1.0.1"]]

  :source-paths ["src"]
  :resource-paths ["resources"]
  
  :cljsbuild { 
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :output-to "app.js"
                :pretty-print true         
                :optimizations :simple}}]})

(defproject candystore-backend "0.1.0-SNAPSHOT"
  :description "Backend for candystore application"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [compojure "1.5.1"]
                 [ring/ring-defaults "0.2.1"]
                 [org.postgresql/postgresql "42.2.2.jre7"]
                 [com.layerware/hugsql "0.4.9"]
                 [org.clojure/data.json "0.2.6"]
                 [ring/ring-json "0.4.0"]]
  :plugins [[lein-ring "0.9.7"]]
  :ring {:handler candystore.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}})

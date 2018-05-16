(ns candystore.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [candystore.db :as cs-db]))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (GET "/status" [] "Candyshop backend running smoothly :)")
  (GET "/users" [] (str "db user test: " (cs-db/get-users cs-db/db)))
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))

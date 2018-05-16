(ns candystore.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults api-defaults]]
            [ring.util.response :as response]
            [candystore.db :as cs-db]
            [candystore.auth :as cs-auth]))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (GET "/token-sample-check" request (cs-auth/handle-if-valid request (fn [] "correct token")))
  (GET "/status" [] "Candyshop backend running smoothly :)")
  (GET "/users" [] (str "db user test: " (cs-db/get-users-all cs-db/db)))
  (GET "/products" [] (str "DB all products: " (cs-db/get-products-all cs-db/db)))
  (route/not-found "Not Found"))

(def app
    (wrap-defaults app-routes site-defaults))

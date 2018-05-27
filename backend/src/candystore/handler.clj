(ns candystore.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults api-defaults]]
            [ring.util.response :as response]
            [clojure.data.json :as json]
            [candystore.db :as cs-db]
            [candystore.auth :as cs-auth]
            [candystore.user-api :as cs-user]))

(defroutes app-routes
  (GET "/" [] "Hello World")
  ;TODO: These token checks should be done in the middleware
  (GET "/token-sample-check" request (cs-auth/handle-if-valid request (fn [] "correct token")))
  (GET "/status" [] "Candyshop backend running smoothly :)")
  (GET "/products" [] (str "DB all products: " (cs-db/get-products-all cs-db/db)))
  (route/not-found "Not Found"))

(def app 
  (wrap-defaults (routes cs-user/user-routes app-routes) api-defaults))
(ns candystore.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults api-defaults]]
            [ring.middleware.json :refer [wrap-json-body]]
            [ring.util.response :as response]
            [clojure.data.json :as json]
            [candystore.db :as cs-db]
            [candystore.auth :as cs-auth]
            [candystore.user-api :as cs-user]
            [candystore.product-api :as cs-product]
            [candystore.transaction-api :as cs-transaction]))

(defroutes app-routes
  (GET "/" [] "Hello World")
  ;TODO: These token checks should be done in the middleware
  (GET "/token-sample-check" request (cs-auth/handle-if-valid request (fn [] "Correct API key")))
  (GET "/status" [] "Candyshop backend running smoothly :)")
  (GET "/stats" [] (str "Candystore currently has: "
                        (count (cs-db/get-users-all cs-db/db)) " users and "
                        (count (cs-db/get-products-all cs-db/db)) " products. Total transaction: "
                        (count (cs-db/get-transactions-all cs-db/db))))
  (route/not-found "Not Found"))

(def app
  (routes
    (-> (routes cs-user/user-routes cs-product/product-routes cs-transaction/transaction-routes app-routes)
      (wrap-json-body)
      (wrap-defaults api-defaults))))
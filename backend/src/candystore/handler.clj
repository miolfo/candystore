(ns candystore.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults api-defaults]]
            [ring.middleware.json :refer [wrap-json-body]]
            [ring.util.response :as response]
            [ring.middleware.cors :refer [wrap-cors]]
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

(defn wrap-json-content-type [handler]
  (fn [request]
    (let [response (handler request)]
      (-> response
          (assoc-in [:headers "Content-Type"] "application/json")
          (assoc-in [:headers "Access-Control-Allow-Origin"] "*")))))

(def app
  (routes
   (-> (routes cs-user/user-routes cs-product/product-routes cs-transaction/transaction-routes app-routes)
      (wrap-cors :access-control-allow-origin #".*"
                 :access-control-allow-methods [:get :put :post]
                 :access-control-allow-headers ["Content-Type"])
       ;(wrap-json-content-type)
       (wrap-json-body)
       (wrap-defaults (assoc-in api-defaults [:security :anti-forgery] false)))))
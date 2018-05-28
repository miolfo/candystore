(ns candystore.product-api
  (:require [compojure.core :refer :all]
    [compojure.route :as route]
    [ring.middleware.defaults :refer [wrap-defaults site-defaults api-defaults]]
    [ring.util.response :as response]
    [clojure.data.json :as json]
    [candystore.db :as cs-db]
    [candystore.auth :as cs-auth]))

(defroutes product-routes
  (context "/products" []
    (GET "/" [] (json/write-str (apply vector (cs-db/get-products-all cs-db/db))))
    (GET "/:id" [id] (json/write-str (first (cs-db/get-product-by-id cs-db/db {:id (Integer/parseInt id)}))))))
(ns candystore.transaction-api
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults api-defaults]]
            [ring.util.response :as response]
            [clojure.data.json :as json]
            [candystore.db :as cs-db]
            [candystore.auth :as cs-auth]))

; Extend timestamp type to enable json output
(extend-type java.sql.Timestamp
  json/JSONWriter
  (-write [date out]
    (json/-write (str date) out)))

(defn add-transaction [original-body]
  (let [body (clojure.walk/keywordize-keys original-body)]
    (cs-db/insert-transaction cs-db/db body)))

;(cs-db/insert-transaction cs-db/db {:user_id 1 :product_id 1 :amount 2}
(defroutes transaction-routes
  (context "/transactions" []
    (GET "/" [] (json/write-str (apply vector (cs-db/get-transactions-all cs-db/db))))
    (GET "/:id" [id] (json/write-str (first (cs-db/get-transaction-by-id cs-db/db {:id (Integer/parseInt id)}))))
    (POST "/" request (add-transaction (:body request)))))

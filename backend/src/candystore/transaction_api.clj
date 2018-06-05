(ns candystore.transaction-api
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults api-defaults]]
            [ring.util.response :as response]
            [clojure.data.json :as json]
            [candystore.db :as cs-db]
            [candystore.auth :as cs-auth]
            [clojure.java.jdbc :as jdbc]))

; Extend timestamp type to enable json output
(extend-type java.sql.Timestamp
  json/JSONWriter
  (-write [date out]
    (json/-write (str date) out)))

(defn get-final-transaction [transaction]
  (if (contains? transaction :product_id)
    (assoc transaction :amount (get-product-price transaction))
    (assoc transaction :product_id nil)))

(defn get-product-price [transaction]
  (:price (cs-db/get-product-by-id cs-db/db {:id (:product_id transaction)})))

(defn update-user-balance [transaction tx]
  (let [old-balance (:balance (cs-db/get-user-balance tx {:id (:user_id transaction)}))]
    (str (cs-db/update-user-balance tx {:id (:user_id transaction) :balance (- old-balance (:amount transaction))}))))

(defn add-transaction [original-body]
  (let [body (clojure.walk/keywordize-keys original-body)
        final-transaction (get-final-transaction body)
        old-balance (:balance (cs-db/get-user-balance cs-db/db {:id (:user_id final-transaction)}))]
    (str (jdbc/with-db-transaction [tx cs-db/db]
           (cs-db/insert-transaction tx final-transaction)
           (cs-db/update-user-balance tx {:id (:user_id final-transaction) :balance (- old-balance (:amount final-transaction))})))))

(defroutes transaction-routes
  (context "/transactions" []
    (GET "/" [] (json/write-str (apply vector (cs-db/get-transactions-all cs-db/db))))
    (GET "/:id" [id] (json/write-str (first (cs-db/get-transaction-by-id cs-db/db {:id (Integer/parseInt id)}))))
    (POST "/" request (add-transaction (:body request)))))

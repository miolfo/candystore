(ns candystore.user-api
  (:require [compojure.core :refer :all]
    [compojure.route :as route]
    [ring.middleware.defaults :refer [wrap-defaults site-defaults api-defaults]]
    [ring.util.response :as response]
    [clojure.data.json :as json]
    [candystore.db :as cs-db]
    [candystore.auth :as cs-auth]))

(defn to-user-json-list [users]
  (str  "[" (apply str (clojure.string/join "," (map #(json/write-str %) users))) "]"))

(defroutes user-routes
  (GET "/users" [] (to-user-json-list (apply list (cs-db/get-users-all cs-db/db)))))
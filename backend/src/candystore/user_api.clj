(ns candystore.user-api
  (:require [compojure.core :refer :all]
    [compojure.route :as route]
    [ring.middleware.defaults :refer [wrap-defaults site-defaults api-defaults]]
    [ring.util.response :as response]
    [clojure.data.json :as json]
    [candystore.db :as cs-db]
    [candystore.auth :as cs-auth]))

(defroutes user-routes
  (context "/users" []
    (GET "/" [] (json/write-str (apply vector (cs-db/get-users-all cs-db/db))))))
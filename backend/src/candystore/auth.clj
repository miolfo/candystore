(ns candystore.auth
  (:require
   [ring.util.response :as response]))

(defn get-correct-api-key [] (System/getenv "API_KEY"))

(defn get-request-api-key [request]
  (get-in request [:headers "apikey"]))

(defn validate-api-key [request] (if (= (get-request-api-key request) (get-correct-api-key)) true false))

(defn forbidden [] {:body (str "Invalid API key") :headers {"Content-Type" "text/html"} :status 403})

(defn handle-if-valid [request handler]
  (if (validate-api-key request) (handler) (forbidden)))
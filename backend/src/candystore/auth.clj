(ns candystore.auth
  (:require 
  [ring.util.response :as response]))

;TODO: Read actual token
(defn get-correct-token [] "hessuhopo")

(defn get-request-token [request] 
  (get-in request [:headers "token"]))

(defn validate-token [request] (if (= (get-request-token request) (get-correct-token)) true false))

(defn forbidden [] {:body (str "Invalid token") :headers {"Content-Type" "text/html"} :status 403})

(defn handle-if-valid [request handler]
  (if (validate-token request) (handler) (forbidden)))
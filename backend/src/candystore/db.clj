(ns candystore.db
  (:require [hugsql.core :as hugsql]))

(def db
  {:classname "org.postgresql.Driver"
   :subprotocol "postgresql"
   :subname (str "//db:" (System/getenv "POSTGRES_PORT") "/" (System/getenv "POSTGRES_DB"))
   :user (System/getenv "POSTGRES_USER")
   :password (System/getenv "POSTGRES_PASSWORD")})

(hugsql/def-db-fns  "candystore/sql/users.sql")
(hugsql/def-db-fns  "candystore/sql/products.sql")
(hugsql/def-db-fns  "candystore/sql/transactions.sql")
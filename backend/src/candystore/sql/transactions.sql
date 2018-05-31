-- :name get-transactions-all
-- :command :query
-- :result :*
-- :doc get all transactions
SELECT * 
  FROM store_transactions;

-- :name get-transaction-by-id
-- :doc get transaction by id
SELECT *
  FROM store_transactions
  WHERE id = :id;

-- :name insert-transaction :! :n
-- :doc insert new transaction
INSERT into store_transactions (user_id, product_id, amount) VALUES (:user_id, :product_id, :amount);
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
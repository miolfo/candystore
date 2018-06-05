-- :name get-users-all
-- :command :query
-- :result :*
-- :doc get all users
SELECT * 
  FROM store_users;

-- :name get-user-by-id :? :1
-- :doc get user by id
SELECT *
  FROM store_users
  WHERE id = :id;

-- :name get-user-by-payment-option :? :1
-- :doc get user by payment option
SELECT fname, lname, balance, payment_option
  FROM store_users
  LEFT JOIN store_payment_options
  ON store_payment_options.u_id = store_users.id
  WHERE payment_option like :payment_option;

-- :name update-user-balance :! :n
-- :doc update user blanace
UPDATE store_users
  SET balance = :balance
  WHERE id = :id;

-- :name get-user-balance :? :1
-- :doc get single users balance
SELECT balance
  FROM store_users
  WHERE id = :id;
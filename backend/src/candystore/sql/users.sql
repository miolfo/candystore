-- :name get-users-all
-- :command :query
-- :result :*
-- :doc get all users
SELECT * 
  FROM store_users;

-- :name get-user-by-id
-- :doc get user by id
SELECT *
  FROM store_users
  WHERE id = :id;
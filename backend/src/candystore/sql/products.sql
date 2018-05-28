-- :name get-products-all
-- :command :query
-- :result :*
-- :doc get all products
SELECT * 
  FROM store_products;

-- :name get-product-by-id
-- :doc get product by id
SELECT *
  FROM store_products
  WHERE id = :id;
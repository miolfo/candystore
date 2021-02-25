#!/bin/bash

# do POST request with correct content type header (application/json) and data payload from
# reqbulk.json which has list of json objects
#curl -v -X POST -H "Content-Type: application/json" -d @reqbulk.json localhost:3333/transactions/bulk

# same for single transaction
#curl -v -X POST -H "Content-Type: application/json" -d @req.json localhost:3333/transactions/

# get methods are pretty straight forward =DG<
#curl -v "Content-Type: application/json" localhost:3333/users        #List all users
#curl -v "Content-Type: application/json" localhost:3333/products     #List all products
#curl -v "Content-Type: application/json" localhost:3333/transactions #List all transactions
#curl -v "Content-Type: application/json" localhost:3333/stats  #Current overview of everything in db  
#curl -v "Content-Type: application/json" localhost:3333/       #Hello world


set -e

echo "derp"
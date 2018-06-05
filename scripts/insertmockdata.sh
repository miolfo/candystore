#!/usr/bin/bash
# this script will insert mock data into your database

set -e

. ../.env

docker exec psql \
  psql $POSTGRES_DB -U $POSTGRES_USER --file=mockdata/mock_products.sql
docker exec psql \
  psql $POSTGRES_DB -U $POSTGRES_USER --file=mockdata/mock_transactions.sql
docker exec psql \
  psql $POSTGRES_DB -U $POSTGRES_USER --file=mockdata/mock_users.sql
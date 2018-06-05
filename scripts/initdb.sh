#!/usr/bin/bash
# This script will run init_tables script to database
# if psql container doesnt run it by itself
set -e

. ../.env

docker exec psql \
  psql $POSTGRES_DB -U $POSTGRES_USER --file=docker-entrypoint-initdb.d/1-tables.sql
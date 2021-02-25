#!/bin/bash
# this script will insert mock data into your database

set -e
set -x
. ../.env

HAISTAPASKA=candystore-db

if [ -z $1 ]
  then
  echo No script file given, inserting all.
  docker exec $HAISTAPASKA \
    psql $POSTGRES_DB -U $POSTGRES_USER --file=mockdata/mock_products.sql
  docker exec $HAISTAPASKA \
    psql $POSTGRES_DB -U $POSTGRES_USER --file=mockdata/mock_transactions.sql
  docker exec $HAISTAPASKA \
    psql $POSTGRES_DB -U $POSTGRES_USER --file=mockdata/mock_users.sql
  exit
fi

SCRIPTNAME=${1##*/}
docker exec psql \
  psql $POSTGRES_DB -U $POSTGRES_USER --file=mockdata/$SCRIPTNAME

#!/usr/bin/bash

# This script connects to candystore-back and connects to nRepl

EXTRA_PARAM=""

if [[ "$OSTYPE" == "msys" ]]
then
  echo "Windows detected, prepending winpty to allocate tty"
  EXTRA_PARAM="winpty"
fi

OLD=$(pwd)
CORRECTPATH=${OLD%%scripts}

cd $CORRECTPATH
$EXTRA_PARAM docker-compose exec back bash lein repl :connect localhost:6666
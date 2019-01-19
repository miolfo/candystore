#!/bin/bash

# Starts candystore with dev settings
EXTRA_PARAM=""

if [[ "$OSTYPE" == "msys" ]]
then
  echo "Windows detected, prepending winpty to allocate tty"
  EXTRA_PARAM="winpty"
fi

OLD=$(pwd)
CORRECTPATH=${OLD%%scripts}

cd $CORRECTPATH
$EXTRA_PARAM docker-compose -f docker-compose-dev.yml up
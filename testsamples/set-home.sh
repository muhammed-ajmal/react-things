#!/bin/bash

######################################

#help replace the values in package.json
#######################################
set -eu
#grep -oP "REACT_APP_BASENAME=\K.*" .ev
#help replace the values in package.json

configurer() {
set +e
grep REACT_APP_BASENAME .env
if [ $? -eq 0 ]
then
   replace=$(grep -oP "REACT_APP_BASENAME=\K.*" .env)
else
   set -e
   replace=$react_app_homepage
fi
echo $replace
search='react_app_homepage'
#Note the "" after -i, needed in OS X
sed -i "s;${search};${replace};g" package.json
}
configurer

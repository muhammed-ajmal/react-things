set -eu


echo "REACT_APP_apiKey=$fb_gc_apikey" >> .env
echo "REACT_APP_appId=$fb_gc_appId" >> .env
echo "REACT_APP_authDomain=$fb_gc_authDomain" >> .env
echo "REACT_APP_databaseURL=$fb_gc_databaseURL" >> .env
echo "REACT_APP_measurementId=$fb_gc_measurementId" >> .env
echo "REACT_APP_messagingSenderId=$fb_gc_messagingSenderId" >> .env
echo "REACT_APP_projectId=$fb_gc_projectId" >> .env
echo "REACT_APP_storageBucket=$fb_gc_storageBucket" >> .env
echo "REACT_APP_BASENAME=$react_app_homepage" >> .env
echo "Finish the env var set for github cards"

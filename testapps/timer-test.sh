set -eu

echo "Start testing timer application"
cd timer # timer build
npm i
npm test

echo "finish testing timer application"

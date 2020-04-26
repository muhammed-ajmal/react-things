set -eu

echo "Start testing stargame application"
cd stargame # stargame build
npm i
npm test

echo "finish testing stargame application"

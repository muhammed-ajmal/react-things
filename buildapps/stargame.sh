set -eu

echo "Starting stargame application"
cd stargame # stargame build
npm i

npm run build
cp -r build/ stargame
mv stargame ../build/

echo "finish stargame application"

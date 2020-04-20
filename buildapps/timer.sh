set -eu

echo "Starting timer application"
cd timer # timer build
npm i
npm test
CI=false npm run build
cp -r build/ timer
mv timer ../build/

echo "finish timer application"

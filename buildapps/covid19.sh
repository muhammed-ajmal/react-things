set -eu

echo "starting covid19 application"

cd covid19 # covid19app build
npm i
npm test
npm run build
cp -r build/ covid19
mv covid19 ../build/

echo "finish covid19 application"

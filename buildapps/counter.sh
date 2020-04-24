set -eu

echo "Starting counter application"
cd counter # counter build
npm i

CI=false npm run build
cp -r build/ counter
mv counter ../build/

echo "finish counter application"

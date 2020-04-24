set -eu

echo "Start testing counter application"
cd counter # counter build
npm i
npm test


echo "finish testing counter application"

set -eu

echo "Starting parseitplumber application"
cd parseitplumber # githubcards build
npm i

CI=false npm run build
cp -r build/ parseitplumber
mv parseitplumber ../build/

echo "finish parseitplumber application"

set -eu

echo "Starting githubcards application"
cd github-cards # githubcards build
npm i
npm test
npm run build
cp -r build/ github-cards
mv githubcards ../build/

echo "finish githubcards application"

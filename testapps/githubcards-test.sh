set -eu

echo "Start testing githubcards application"
cd github-cards # githubcards build
npm i
npm test

echo "finish testing githubcards application"

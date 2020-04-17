set -eu


pwd

cd test
npm i
npm test
CI=false npm run build
echo 'react.ajmalaju.com' > build/CNAME # alternate way put it in public folder
mv build ../
#git add updatelog/ *.json
#set +e  # Grep succeeds with nonzero exit codes to show results.
#git status | grep 'new file\|modified'
#if [ $? -eq 0 ]
#then
#    set -e
#    git commit -am "data updated on - $(date)"
#    git remote set-url "$remote_name" "$repo_uri" # includes access token
#    git push --force-with-lease "$remote_name" "$target_branch"
#else
#    set -e
#    echo "No changes since last run"
#fi

echo "finish"

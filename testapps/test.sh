declare -a apps

apps=('test' 'timer' 'counter' 'github-cards' 'stargame')

for app in "${apps[@]}"
do
 cd $app
 echo "start testing $app"
 npm i
 npm test
 echo "finish testing $app"
 cd ..
done

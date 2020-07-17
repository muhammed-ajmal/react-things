declare -a apps

apps=('timer' 'counter' 'github-cards' 'stargame' 'parseitplumber')

for app in "${apps[@]}"
do
 pwd
 cd $app
 echo "start build $app"
 npm i
 npm run build
 cp -r build/ $app
 mv $app ../build/
 echo "finish build $app"
 cd ..
 pwd
done

```
//config.js

import firebase from 'firebase';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL:process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);

export const db = app.database();

```

```
//main or app.js
import {db} from '../config';

//upload data
testData.map((x,i) => db.ref('/githubProfiles').child(i).set(x)); //push data with a key
testData.map((x) => db.ref('/githubProfiles').push(x)); // push data without any keys


const DBData = [];

//Read Data
function ReadDataFromDb(callback {
    db.ref('/githubProfiles').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      data.map((x) => DBData.push(x));
      this.setState({ dataReady: true })
      callback(data)
    });

  }

let DisplayReadData = (data) => console.log(data);

ReadDataFromDb(DisplayReadData);

```


```
// set db rules

{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */

  "rules": {
    ".read": true,
    ".write": true
  }
}

```

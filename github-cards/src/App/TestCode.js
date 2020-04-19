addNewProfile = (profileData) => {
  this.setState( prevState => (
    prevState.profiles.some(user => user.login === profileData.login) ? (
      console.log("already exist"),
      {profiles:[...prevState.profiles]}
    ) : (
      console.log("new"),
      db.ref('/githubProfiles').child(profileData.login).set(profileData),
      {profiles:[...prevState.profiles, profileData]}
  )
));
}
componentDidMount() {
  db.ref('/githubProfiles').on('value', querySnapShot => {
    let data = querySnapShot.val() ? querySnapShot.val() : {};
    console.log(data);
    Object.entries(data).map((x) => testData.includes(x) ? testData:testData.push(x[1]));
    this.setState({ dataReady: true })
  });
}
//testData.map((x,i) => db.ref('/githubProfiles').child(i).set(x));
//testData.map((x) => db.ref('/githubProfiles').push(x));
//db.ref('githubProfiles/' + childData).remove(); // githubProfiles/Ajuajmal IF THE childData =Ajuajmal DBNAME/one-node

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

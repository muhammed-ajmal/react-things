import React from 'react';
import './App.scss';
import {db} from '../config';

const testData = [
];

//testData.map((x,i) => db.ref('/githubProfiles').child(i).set(x));
//testData.map((x) => db.ref('/githubProfiles').push(x));
class Card extends React.Component {
  render(){
    const profileData = this.props
    return(
      <div className="github-profile">
        <img src={profileData.avatar_url} alt ={profileData.name} />
        <div className="info">
          <div className="name">{profileData.name}</div>
          <div className="company"> {profileData.company}</div>
        </div>
      </div>
    );
  }
}

class CardList extends React.Component {
  constructor() {
    super();
    this.state = {
      dataReady: false
    }
  }
  componentDidMount() {
    db.ref('/githubProfiles').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      data.map((x) => testData.push(x));
      this.setState({ dataReady: true })
    });
  }
  render(){
    if (this.state.dataReady) {
      return (testData.map((githubUser,i) => <Card key = {i} {...githubUser}/>));
    } else {
      return (
        <div className="spinner">
          <span className="spinner-inner-1"></span>
          <span className="spinner-inner-2"></span>
          <span className="spinner-inner-3"></span>
        </div>
      );
    }
  }
}

class Form extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="GitHub Username"
          required
        />
        <button> Add Dev </button>
      </form>
    );
  }
}

class App extends React.Component {
  render () {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form />
        <CardList />
      </div>
    );
  }
}

export default App;

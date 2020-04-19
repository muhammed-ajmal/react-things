import React from 'react';
import './App.scss';
import {db} from '../config';
import axios from 'axios';

const testData = [
];



class Card extends React.Component {
  deleteData = () => {
    this.props.deleteData(this.props.login);
  }
  render(){
    const profileData = this.props
    return(
      <div className="github-profile">
        <img src={profileData.avatar_url} alt ={profileData.name} />
        <div className="info">
          <div className="name">{profileData.name}</div>
          <div className="company"> {profileData.company}</div>
          <button onClick={this.deleteData}>Remove</button>
        </div>
      </div>
    );
  }
}

class CardList extends React.Component {
  state = {
    dataReady: false,
    profiles:this.props.profiles,
  }
  deleteData = (keyData) => {
    this.state.profiles.map((user,i) => user.login.toLowerCase() === keyData.toLowerCase() ? testData.splice(i,1):{})
    db.ref('githubProfiles/' + keyData).remove();
    this.setState(prevState => ({profiles:testData}))
  }

  componentDidMount() {
    db.ref('/githubProfiles').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      Object.entries(data).map((profile) => testData.some( user => user.login.toLowerCase() === profile[1].login.toLowerCase()) ? {}:testData.push(profile[1]));
      this.setState({dataReady:true});
    });
  }
removeUser = () => {console.log("click")}
  // Array [Array ["Raj", Object { name: "Raju" }], Array ["Ajmal", Object { name: "AJU" }]] example DS From above op
  render(){
    if (this.state.dataReady) {
      return (this.state.profiles.map((githubUser,i) => <Card deleteData = {this.deleteData} removeUser={this.removeUser} key = {i} {...githubUser}/>));
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
  state = { userName: '',
  addData:'',
};
  handleSubmit = async (event) => {
    db.goOnline();
      event.preventDefault();
    if(!testData.some( user => user.login.toLowerCase() === this.state.userName.toLowerCase())) {


    this.setState( prevState => (

      {addData:`fetching ${this.state.userName}`}
          ));
    let resp = undefined;
    try {
    resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
      this.props.onSubmit(resp.data);
    db.ref('/githubProfiles').child(resp.data.login).set(resp.data);
    this.setState( prevState => (

      {addData:`successfully fetched ${this.state.userName}`}
          ));
    } catch(err){
      this.setState( prevState => (

        {addData:`no user found with user id ${this.state.userName}`}
      ));
    }

        } else {

          this.setState( prevState => (

            {addData:'user already found'}
          ));
        }
        setTimeout( () => this.setState( prevState => (

          {addData:''}
        )),8000);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          type="text"
          value={this.state.userName}
          placeholder="GitHub Username"
          onChange={ event => this.setState({ userName: event.target.value })}
          required
        />
        <button> Add Dev </button>
        <div className="message">{this.state.addData}</div>
      </form>
    );
  }
}


class App extends React.Component {
  state = {
    profiles: testData,

  };
  addNewProfile = (profileData) => {
    if(!this.state.profiles.some((user) => user.login === profileData.login)){
    this.setState( prevState => (

        {profiles:[...prevState.profiles, profileData]}
          ));
}
}



  render () {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;

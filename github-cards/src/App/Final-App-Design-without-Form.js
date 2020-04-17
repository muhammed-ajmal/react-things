import React from 'react';
import './App.scss';

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


class Card extends React.Component {
  render(){
    const x = parseInt(this.props.cardId);
    const profileData = testData[x];
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
  render(){
    return (
      <div>
      <Card cardId="0" />
      <Card cardId="1" />
      <Card cardId="2" />
      </div>
    );
  }
}

class AppDwoF extends React.Component {
  render () {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <CardList />
      </div>
    );
  }
}

export default AppDwoF;

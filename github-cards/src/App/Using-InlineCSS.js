import React from 'react';
import './AppCSS-For-Inline.scss';

class Card extends React.Component {
  render(){
    return(
      <div className="github-profile" style={{ margin:'1rem' }}>
        <img src="https://placehold.it/75" />
        <div className="info" style={{ display:'inline-block', marginLeft:10 }}>
          <div className="name" style={{ fontSize:'125%' }}> Name</div>
          <div className="company"> Company</div>
        </div>
      </div>
    );
  }
}

class AppICSS extends React.Component {
  render () {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Card />
      </div>
    );
  }
}

export default AppICSS;

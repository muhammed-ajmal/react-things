import React from 'react';
import './App.css';

class AppC extends React.Component {
  // constructor
  // this
  render () {
    return <div className="header">{this.props.title}</div>;
  }
}

export default AppC;

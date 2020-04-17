import React from 'react';
import './App.scss';

// Here we are passing props params directly
function AppFP({title}) {
  return (
  <div className="header"> {title}</div>
  );
}

export default AppFP;

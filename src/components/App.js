import React, { Component } from 'react';
import logo from '../static/logo.svg';
import '../static/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
         test react applications
        </p>
      </div>
    );
  }
}

export default App;

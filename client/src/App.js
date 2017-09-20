import React, { Component } from 'react';
import Register from './pages/Register';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>studyBuddies</h2>
        </div>
        <Register />
      </div>
    );
  }
}

export default App;

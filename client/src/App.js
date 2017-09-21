import React, { Component } from 'react';
import Register from './pages/Register';
import Feed from './pages/Feed';
import Login from './pages/Login';

import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>studyBuddies</h2>
        </div>
        <Route path='/' exact component={Register} />
        <Route path='/feed' component={Feed} />
        <Route path='/login' component={Login} />
      </div>
    );
  }
}

export default App;

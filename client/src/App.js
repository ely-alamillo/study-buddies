import React, { Component } from 'react';
import Register from './pages/Register';
import Feed from './pages/Feed';
import Login from './pages/Login';
import SingleGroup from './pages/SingleGroup';
import Navigation from './pages/Navigation'
import MyGroups from './pages/MyGroups'

import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        {/* <div className="App-header">
          <h2>studyBuddies</h2>
        </div> */}
        <Navigation />
        <Route path='/' exact component={Register} />
        <Route path='/feed' exact component={Feed} />
        <Route path='/login' component={Login} />
        <Route path='/feed/:id'  component={SingleGroup} />
        <Route path='/mygroups'  component={MyGroups} />
      </div>
    );
  }
}

export default App;

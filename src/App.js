import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import { observer } from 'mobx-react'

import Login from './Components/Landing/Login';
import Users from './Components/Swiping/Users';
import NavBar from './Components/NavBar';
import CurrentUser from './Components/UserPage/CurrentUser';
import User from './Components/Swiping/User';
import Chats from './Components/Chats/Chats';
import Deck from './Components/Swiping/Deck';


@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <NavBar /> */}
          <Route path="/" exact component={Login} />
          <Route path='/currentUserPage' exact component={CurrentUser} />
          <Route path='/swiping' exact component={Users} />
          <Route path='/chats' exact component={Chats} />
          {/* <Deck /> */}

        </div>
      </Router>
    );
  }
}

export default App;

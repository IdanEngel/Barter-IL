import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Login from './Components/Landing/Login';
import Users from './Components/Swiping/Users';
import NavBar from './Components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route path="/" exact component={Login} />
          <Users />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
    <div className="nav-bar">
       <Link to='/currentUserPage'> <div>Userpage</div> </Link>
       <Link to='/swiping'> <div>Swiping</div> </Link>
       <Link to='/chats'> <div>Chats</div> </Link>

    </div>
    );
  }
}

export default NavBar;

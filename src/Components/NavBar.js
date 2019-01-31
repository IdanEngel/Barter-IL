import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavBar extends Component {
  render() {
    return (
    <div className="nav-bar">
       <Link to='/currentUserPage'> <FontAwesomeIcon icon="user-friends"></FontAwesomeIcon> </Link>
       <Link to='/swiping'><FontAwesomeIcon icon="hand-holding-heart"></FontAwesomeIcon> </Link>
       <Link to='/chats'> <FontAwesomeIcon icon="comment"></FontAwesomeIcon>  </Link>

    </div>
    );
  }
}

export default NavBar;

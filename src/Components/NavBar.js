import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer, inject } from 'mobx-react'

@inject('UserData')
@observer
class NavBar extends Component {
  passRoute = (e) => {
    let currentPage = e.target.getAttribute('href')
    this.props.UserData.getCurrentPage(currentPage)
  }
  render() {
    return (
    <div className="nav-bar">
       <Link to='/currentUserPage/:username' onClick={this.passRoute}> <FontAwesomeIcon icon="user-friends"></FontAwesomeIcon> </Link>
       <Link to='/swiping' ><FontAwesomeIcon icon="hand-holding-heart"></FontAwesomeIcon> </Link>
       <Link to='/chats' > <FontAwesomeIcon icon="comment"></FontAwesomeIcon>  </Link>

    </div>
    );
  }
}

export default NavBar;

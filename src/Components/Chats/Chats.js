//this component will render all the chats. A parent of chatlist 
import React, { Component } from 'react';
import NavBar from '../NavBar';
import Chatlist from './Matches';
import { observer, inject } from 'mobx-react';
import './Chats.css'
import Matches from './Matches';

@inject('UserData')
@observer
class Chats extends Component {

  componentDidMount = () => {
    this.props.UserData.getUsers()
  }
  render() {
    return (
      <div className="chats">
        <NavBar />
        <div className="chats-header">New Matches</div>
        <div className="carousel">
          {this.props.UserData.users.map(user => {
            return (
              <Matches user={user} />
            )
          })}
        </div>
        <hr></hr>
        <div className="chats-header">Messages</div>
        <div className="message-list">

        </div>
      </div>
    );
  }
}

export default Chats;

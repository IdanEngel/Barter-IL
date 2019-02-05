//this component will render all the chats. A parent of chatlist 
import React, { Component } from 'react';
import NavBar from '../NavBar';
import { observer, inject } from 'mobx-react';
import './Chats.css'
import Matches from './Matches';
import ChatBox from './ChatBox';

@inject('UserData', 'userLogin')
@observer
class Chats extends Component {
  passRoute = () => {
    let currentPage = this.props.match.url
    this.props.UserData.getCurrentPage(currentPage)
  }
  componentDidMount = () => {
    this.props.UserData.getUsers()
  }
  render() {
    this.passRoute()
    return (
      <div className="chats">
        <ChatBox />
        <NavBar />
        <div className="chats-header">New Matches</div>
          <Matches />
        <hr></hr>
        <div className="chats-header">Messages</div>
        <div className="message-list">
        </div>
      </div>
    );
  }
}

export default Chats;

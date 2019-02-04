//this component will render all the chats. A parent of chatlist 
import React, { Component } from 'react';
import Axios from 'axios';
import NavBar from '../NavBar';
import { observer, inject } from 'mobx-react';
import './Chats.css'
import Matches from './Matches';
import ChatWindow from './ChatWindow';

@inject('UserData', 'userLogin')
@observer
class Chats extends Component {
  passRoute = () => {
    let currentPage = this.props.match.url
    this.props.UserData.getCurrentPage(currentPage)
    console.log(`currentscreen has been updated to: ${currentPage}`)

  }
  componentDidMount = () => {
    this.props.UserData.getUsers()
  }
  sendUserName = () => {
    let username = this.props.userLogin.username
    Axios.post('http://localhost:8000/user', {
      username: username
    },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      console.log('sucess')
    }).catch(error => {
      console.error(error)
    })
  }
  render() {
    this.sendUserName()
    console.log(this.props.UserData.currentScreen)
    this.passRoute()
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
        {/* <ChatWindow /> */}
      </div>
    );
  }
}

export default Chats;

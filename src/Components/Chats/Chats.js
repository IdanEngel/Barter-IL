import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Chatlist from './ChatList';

class Chats extends Component {
  // constructor(){
  //   this.state = {
  //     currentUser: "",
  //     message: []
  //   }
  // }
  render() {
    return (
      <div className="chats">
        <h1>Chats</h1>
        <img className="chatImg" src="https://static1.squarespace.com/static/58297336c534a550aa00672c/t/5b0ff738f950b73249f9bf38/1527773020353/girl+with+empty+tinder+profile"></img>
      </div>
    );
  }
}

export default Chats;

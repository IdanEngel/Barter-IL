import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route} from 'react-router-dom';
import './ChatList';

class Chats extends Component {
  constructor(){
    this.state = {
      currentUser: "",
      message: []
    }
  }
  render() {
    return (
    <div className="chats">
  <Route path="/chatlist" exact Component={ChatList} />
    </div>
    );
  }
}

export default Chats;

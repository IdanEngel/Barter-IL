import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { observer } from 'mobx-react'
import Login from './Components/Landing/Login';
import Users from './Components/Swiping/Users';
import CurrentUser from './Components/UserPage/CurrentUser';
import Chats from './Components/Chats/Chats';
import { faUser, faComment, faUserFriends, faHandHoldingHeart, faHeart, faTimesCircle, faHandshake} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Chatlist from './Components/Chats/Matches';
import Signup from './Components/Landing/Signup';
import ChatBox from './Components/Chats/ChatBox';
library.add(faUser, faComment, faUserFriends, faHandHoldingHeart, faHeart, faTimesCircle,faHandshake)



@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <NavBar /> */}
          {/* <ChatBox /> */}

          <Route path="/" exact component={Login} />
          <Route path='/currentUserPage' exact component={CurrentUser} />
          <Route path='/swiping' exact component={Users} />
          <Route path='/chats' exact component={Chats} />
          <Route path="/chatlist" exact Component={Chatlist} />
          <Route path="/signup" exact Component={Signup}/>
          <Route path="/chatslists/chatBox" exact Component={ChatBox} />

          {/* <Deck /> */}

        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import { observer } from 'mobx-react'
import Login from './Components/Landing/Login';
import Users from './Components/Swiping/Users';
import CurrentUser from './Components/UserPage/CurrentUser';
import Chats from './Components/Chats/Chats';
import { faUser, faComment, faUserFriends, faHandHoldingHeart, faHeart, faTimesCircle, faHandshake} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Chatlist from './Components/Chats/ChatList';
import Signup from './Components/Landing/Signup';
library.add(faUser, faComment, faUserFriends, faHandHoldingHeart, faHeart, faTimesCircle,faHandshake)



@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <NavBar /> */}
          <Route path="/" exact component={Login} />
          <Route path='/currentUserPage' exact component={CurrentUser} />
          <Route path='/swiping' exact component={Users} />
          <Route path='/chats' exact component={Chats} />
          <Route path="/chatlist" exact Component={Chatlist} />
          <Route path="/signup" exact Component={Signup}/>

          {/* <Deck /> */}

        </div>
      </Router>
    );
  }
}

export default App;

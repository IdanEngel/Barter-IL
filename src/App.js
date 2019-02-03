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
import User from './Components/Swiping/User';
import ChatWindow from './Components/Chats/ChatWindow';
library.add(faUser, faComment, faUserFriends, faHandHoldingHeart, faHeart, faTimesCircle,faHandshake)



@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        
          <Route path='/' exact render={({match})=> <Login match={match} />}/>
          <Route path='signup' exact render={({match})=> <Signup match={match} />}/>

          {/* <Route path='/currentUserPage' exact component={CurrentUser} /> */}
          <Route path='/currentUserPage/:username' exact render={({match})=> <CurrentUser match={match} />}/>
          <Route path='/swiping' exact render={({match})=> <Users match={match} />}/>
          <Route path='/chats' exact render={({match})=> <Chats match={match} />}/>

          {/* <Route path='/chats' exact component={Chats} /> */}
          <Route path="/chatlist" exact component={Chatlist} />
          <Route path="/signup" exact component={Signup}/>
          <Route path="/chatslists/chatWindow/:username" render={({match})=> <ChatWindow match={match} />}/>
          {/* <Deck /> */}

        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import NavBar from '../NavBar';


@inject('UserData')
@observer
class ChatWindow extends Component{
    passRoute = () => {
        let currentPage = this.props.match.url
        this.props.UserData.getCurrentPage(currentPage)
      }
    render(){
        console.log(this.props.match.url)
        this.passRoute()
        return(
            <div>
                <NavBar />
                <h1>Chat</h1>
            </div>
        )
    }
}
export default ChatWindow
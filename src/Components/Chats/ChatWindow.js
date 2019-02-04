import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import NavBar from '../NavBar';
import Chatkit from '@pusher/chatkit-client'

@inject('UserData','userLogin')
@observer
class ChatWindow extends Component{
    componentDidMount(){
        const chatManager = new Chatkit.ChatManager({
            instanceLocator:'v1:us1:5be2ab98-48ee-41f2-a814-0adeb5e65142',
            userId: this.props.userLogin.username,
            tokenProvider: new Chatkit.TokenProvider({
                url: 'http://localhost:8000/authenticate'
            })
        })
    }
    passRoute = () => {
        let currentPage = this.props.match.url
        this.props.UserData.getCurrentPage(currentPage)
        console.log(`currentscreen has been updated to: ${currentPage}`)
      }
    render(){
        console.log(this.props.match.url)
        this.passRoute()
        return(
            <div>
                <NavBar />
                <h1>Chats</h1>

            </div>
        )
    }
}
export default ChatWindow
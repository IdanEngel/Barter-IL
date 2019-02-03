import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { axios } from 'axios';
import ChatBox from './ChatBox'


class Chatlist extends Component{
    constructor(){
        this.state ={
            users: []
        }
    }

    async getUsers (){
        return axios.get('http://localhost:8000/users')
    }

    async componentDidMount(){
        const res = await this.getUsers()
        this.setState({
            users: res.data
        })
    }

    render(){
        return(
            <div className="chat-list">
            <Link to="/chatslists/chatBox/">
            <div className="chats-container">
            {this.state.users.map(user => <ChatBox user={user} />)}
            </div>
            </Link>
            </div>

        )
    }
}

export default ChatList
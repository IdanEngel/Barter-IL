import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Axios from 'axios';
import ChatWindow from './ChatWindow'

@inject('userLogin')
@observer
class ChatBox extends Component {
    constructor() {
        super()
        this.state = {
            currentScreen: ''
        }
    }
    sendUserName = () => {
        // let username = this.props.userLogin.username
        Axios.post('http://localhost:8000/user', {
            username: localStorage.getItem(`username`)
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
        // this.sendUserName()
        return (
            <div>
                <div>hello</div>
                <button onClick={this.sendUserName}>click</button>
            </div>
        )
    }
}
export default ChatBox


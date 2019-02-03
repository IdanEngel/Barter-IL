import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Axios from 'axios';


@inject('userLogin')
@observer
class ChatBox extends Component {
    constructor() {
        super()
        this.state = {
            username: 'absss'
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
            console.log(response)
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


import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

class ChatBox extends Component{
    constructor(){
        this.state ={
            message: ''
        }
    }

    setMessage = (e) =>{
        const newMessage =  e.target.value
        this.setState=({
            message: newMessage
        })

    sendMessage(){
            axios.put()
        }
    }
    render(){
        return(
            <div className="chat-box">
            <Messages messages={this.props.user.messages} />
            <input id="message-input" placeholder="Write your text here" onChange={this.setMessage}></input>
            <button id="send-button" onClick={this.sendMessage}></button>
            </div>
        )
    }
}
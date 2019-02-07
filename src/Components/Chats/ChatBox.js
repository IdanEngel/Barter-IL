import React, { Component } from 'react';
import NavBar from '../NavBar';
import './Chats.css';
import socket from 'socket.io-client'
import { observer, inject } from 'mobx-react'

@inject('UserData', 'userLogin')
@observer
class Chatbox extends Component {
    constructor() {
        super()
        this.state = {
            room: "",
            username: "",
            message: "",
            messages: []
        }
        this.socket = socket(`http://localhost:8000/`)
    }
    componentDidMount() {
        this.socket.on("newMessage", (data) => {
            this.addMessage(data)
        })
        this.socket.on("someoneJoined", () => {
            console.log("someoneJoined");
        })
        this.emitEvents()

    }

    matchedId = async () => {
        const currentUserId = this.props.UserData.matchedUserId
        const likedUserId = this.props.userLogin.currentUserId
        let joinedId
        currentUserId > likedUserId ?
            joinedId = currentUserId + likedUserId :
            joinedId = likedUserId + currentUserId
        console.log(joinedId)
        await this.setState({
            room: joinedId
        })
    }

    addMessage = (data) => {
        console.log(data);
        this.setState({ messages: [...this.state.messages, data] })
    }

    inputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    joinRoom = () => {
        this.socket.emit('joinRoom', this.state.room)
        console.log(this.state.room);

    }
    emitEvents = async () => {
        await this.matchedId()
        this.socket.emit('joinRoom', this.state.room)
        console.log(this.state.room);
        if(this.state.message !== ""){
            this.socket.emit('message', {
                room: this.state.room,
                message: this.state.message,
                username: this.props.userLogin.username
            })
        }
    }


    render() {
        // this.emivents()
        return (
            <div className="mario-chat">
                <NavBar />
                <div className="chat-window">
                    <div className="output">
                        {this.state.messages.map(m => {
                            return (
                                <div><strong>{m.username}</strong>: {m.message}</div>
                            )
                        })}
                    </div>
                </div>
                {/* <input type="text" className="username" placeholder="username" name="username" onChange={this.inputChange} /> */}
                <input type="text" className="message" placeholder="message" name="message" onChange={this.inputChange} />
                <button className="send" onClick={this.emitEvents}>Send</button>




            </div>
        );
    }
}


export default Chatbox;

import React, { Component } from 'react';
import './Chats.css';
import socket from 'socket.io-client'
import NavBar from '../NavBar';

class Chatbox extends Component {
  constructor() {
    super()
    this.state = {
      handle: "",
      message: "",
      messages: [],
      user: `${localStorage.getItem('username')}`
    }
    this.socket = socket(`http://localhost:8000/`)
  }
  componentDidMount() {
    this.socket.on("new_message", (data) => {
      this.addMessage(data)
    })
  }

  joinChat = (chatroomName, cb) => {
    socket.emit('join', chatroomName, cb)
  }

  leaveChat = (chatroom, cb) => {
    socket.emit('leve', chatroom, cb)
  }

  getAvailableUsers = cb => {
    socket.emit('availableUsers', null, cb)
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

 chatHistory = (userName) => {
   
 }

  emitEvents = () => {
    this.socket.emit('chat', {
      handle: this.state.handle,
      message: this.state.message
    })
    this.setState({ message: '' })
  }

  render() {
    return (
      <div className="mario-chat">
      <NavBar />
        <div className="chat-window">
          <div className="output">
            {this.state.messages.map(m => {
              return (
                <div><strong>{m.handle}</strong>: {m.message}</div>
              )
            })}
          </div>
        </div>
        <input type="text" className="handle" placeholder="handle" name="handle" onChange={this.inputChange} />
        <input type="text" className="message" placeholder="message" name="message" onChange={this.inputChange} />
        <button className="send" onClick={this.emitEvents}>Send</button>

      </div>
    );
  }
}

export default Chatbox;

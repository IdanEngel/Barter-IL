import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Chats.css'
import { observer, inject } from 'mobx-react'
import { async } from 'q';
import Axios from 'axios';
import Chatbox from './ChatBox';


@inject('UserData')
@observer
class SingleMatch extends Component {
    sendMatchedUserId = () =>{
        this.props.UserData.getMatchedUserId(this.props.matchedUser._id)
        console.log(`matchedUserId: ${this.props.matchedUser._id}`)
    }
    render() {
       
        return (
            <Link to={"/chats/chatbox/" + this.props.matchedUser.username}>
                <img onClick={this.sendMatchedUserId} className="match-img" src={this.props.matchedUser.imgURL}></img>
            </Link>


        )
    }
}

export default SingleMatch
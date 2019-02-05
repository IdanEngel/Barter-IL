import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Chats.css'
import { observer, inject } from 'mobx-react'
import { async } from 'q';
import Axios from 'axios';


@inject('UserData')
@observer
class SingleMatch extends Component {
    render() {
        return (
            <Link to={"/chatslists/chatWindow/" + this.props.matchedUser.username}>
                <img className="match-img" src={this.props.matchedUser.imgURL}></img>
            </Link>


        )
    }
}

export default SingleMatch
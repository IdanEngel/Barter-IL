import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Chats.css'
import { observer, inject } from 'mobx-react'


@inject('UserData')
@observer
class Matches extends Component {
    render() {
        return (
            <div className="singleMatch-imgDiv">
                <Link to={"/chatslists/chatWindow/" + this.props.user.username}>
                    <img className="match-img" src={this.props.user.imgURL}></img>
                </Link>
            </div>

        )
    }
}

export default Matches
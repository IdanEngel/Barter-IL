import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios';
import NavBar from '../NavBar';

class CurrentUser extends Component {

    render() {
 
        return (
            <div>
                <NavBar />
            <div className="currentUserPage">
                <h1>Shoobert</h1>
                <img src="https://media.licdn.com/dms/image/C5603AQFeD2Nyr-56vw/profile-displayphoto-shrink_200_200/0?e=1551312000&v=beta&t=3HpazftYEi9LINAIQa4kyWxj2kzz_qCpkExKtIjjpco"></img>
             </div>
             </div>
        )
    }
}
export default CurrentUser
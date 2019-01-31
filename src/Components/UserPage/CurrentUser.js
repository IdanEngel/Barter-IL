import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Axios from 'axios';
import NavBar from '../NavBar';

class CurrentUser extends Component {
    constructor() {
        super()
        this.state = {
            val: false
        }
    }

    clearLS = () => {
        localStorage.clear()
        this.setState({
            val: !this.state.val
        })
    }
    render() {
        let storage = localStorage.getItem(`username`)
        return (
            <div>
            <NavBar />
            <h1>Current User</h1>
            <div className="currentUserPage">
                <h2>Shoobert</h2>
                <img src="https://media.licdn.com/dms/image/C5603AQFeD2Nyr-56vw/profile-displayphoto-shrink_200_200/0?e=1551312000&v=beta&t=3HpazftYEi9LINAIQa4kyWxj2kzz_qCpkExKtIjjpco"></img>
             </div>
             {storage ?
                        null :
                        <Redirect to='/' />}
                <button onClick={this.clearLS}>Logout</button>
             </div>
        )
    }
}
export default CurrentUser
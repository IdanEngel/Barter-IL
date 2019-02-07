import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import Users from '../Swiping/Users';
import { Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Login.css'

@inject('userLogin', 'UserData')
@observer
class Login extends Component {
    getCurrentUserId = () => {
        // let currentUsername = this.props.userLogin.username
        this.props.userLogin.getCurrentUserId()
    }

    passRoute = () => {
        this.props.UserData.getCurrentPage('/loginPage')
    }
    inputHandler = (event) => {
        this.props.userLogin.inputHandler(event.target.name, event.target.value)
    }

    localStorageCheck = function () {
        let userName = localStorage.getItem(`place`)
        if (userName) {
            this.findAndRender(userName)
        }
    }
    findAndRender = async () => {
        let username = this.props.userLogin.username
        let password = this.props.userLogin.password
        await this.props.UserData.getUsers()
        let currentUser = this.props.UserData.users
            .find(user => user.username === username)
        if (currentUser && currentUser.password === password) {
            await localStorage.setItem(`username`, username)
            this.forceUpdate()
        }

        else {
            localStorage.clear()
            alert('Your username or password is incorrect, please try agaain')
        }
    }

    render() {
        this.getCurrentUserId()
        let storage = localStorage.getItem(`username`)
        this.passRoute()
        console.log(this.props.userLogin.username)

        let username = this.props.userLogin.username
        return (
            <div>
                <div className="header">
                    Barter IL <FontAwesomeIcon icon="handshake"></FontAwesomeIcon>

                </div>


                <div className="login-box">
                    <input placeholder="username" type="text" name="username"
                        onChange={this.inputHandler} />
                    <input placeholder="password" type="password" name="password"
                        onChange={this.inputHandler} />
                    <button className="login-button" onClick={this.findAndRender}>Login</button>
                    {storage ?
                        <Redirect to={`/currentUserPage/:currentUsername`} /> :
                        null}
                    <Link to="/signup" >
                        <div className="signup-button">Sign up</div>

                    </Link>
                </div>

            </div>
        )
    }
}

export default Login
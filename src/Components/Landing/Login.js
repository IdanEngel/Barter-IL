import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Users from '../Swiping/Users';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            currentUser: "",
            loggedIn: false
        }
    }
    logginIn = () => {
        //if username and password is true ==> set state of loggedIn to true
        //  && currentUser to the username
    }
    render() {
        return (
            <div>

                <h1>Barter IL</h1>
                <div className="login-box">
                    <input placeholder="username" type="text"></input>
                    <input placeholder="password" type="text"></input>
                    <Link to='/users' exact component={Users}><button>Login</button></Link>
                </div>
                <Link to="/signup">
                    <div>click here to signup</div>
                </Link>


            </div>
        )
    }
}

export default Login
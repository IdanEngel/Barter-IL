import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Login extends Component {

    render(){
        return(
            <div>
                <h1>Barter IL</h1>
                <Link to="/signup">
                <div>click here to signup</div>
                </Link>

             
            </div>
        )
    }
}

export default Login
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Axios from 'axios';

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
                 {storage ?
                        null :
                        <Redirect to='/' />}
                <button onClick={this.clearLS}>Logout</button>
                Current User
           </div>

        )
    }
}
export default CurrentUser
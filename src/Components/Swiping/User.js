import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Axios from 'axios';

class User extends Component {
    constructor() {
        super()
        this.state = {
            val: false
        }
    }
    likingUser = (event) =>{
        this.props.likingUser(event.target.value)
        
    }
    clearLS = () =>{
        localStorage.clear()
        this.setState({
            val: !this.state.val
        })

    }
    render() {
        const user = this.props.user
        let storage = localStorage.getItem(`username`)
        return (
            <div>
                 {storage ?
                        null :
                        <Redirect to='/' />}
                <button onClick={this.clearLS}>Logout</button>
                <div className="user-info">
                  <img src={user.imgURL}></img>
                    <div>{user.name}</div>
                    <div>{user.age}</div>
                    <div>{user.location}</div>
                    <div>{user.skills.map(skill => {
                        return (
                            <li>{skill}</li>
                        )
                    })}
            
                    </div>
                <button onClick={this.likingUser}>dislike</button>
                <button onClick={this.likingUser} value={user._id}>like</button> <br/>


                </div>

            </div>
        )
    }
}
export default User
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Axios from 'axios';

class User extends Component {

    likingUser = (event) => {
        this.props.likingUser(event.target.value)

    }


    render() {
        const user = this.props.user
        return (
            <div>

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
                    <button onClick={this.likingUser} value={user._id}>like</button> <br />


                </div>

            </div>
        )
    }
}
export default User
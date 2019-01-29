import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios';

class User extends Component {
    render() {
        const user = this.props.user
        return (
            <div>
                <div className="user-info">
                    <div>{user.name}</div>
                    <div>{user.age}</div>
                    <div>{user.location}</div>
                    <div>{user.skills.map(skill => {
                        return (
                            <li>{skill}</li>
                        )
                    })}
                    </div>

                </div>
            </div>
        )
    }
}
export default User
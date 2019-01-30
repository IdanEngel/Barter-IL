import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Axios from 'axios';
import User from './User';

@inject('UserData')
@observer
class Users extends Component {

    componentDidMount = () => {
        this.props.UserData.getUsers()
    }

    likingUser = (e) => {
        console.log(e)
        this.props.UserData.increaseIndex()
    }
        
    render() {
        const filterdUsers = this.props.UserData.users.filter((user, index) => {
            return (index === this.props.UserData.index)
        })
        return (
            <div>
                {filterdUsers.map(user => {
                    return (
                        <User user={user} likingUser={this.likingUser} />
                    )
                }
                )}
            </div>
        )
    }
}


export default Users
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios';
import User from './User';


class Users extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            index: 0
        }
    }
    getUsers = async () => {
        let users = await Axios.get('http://localhost:8000/users')
        this.setState({
            users: users.data
        })
        return users
    }
    componentDidMount() {
        this.getUsers()
    }

    increaseIndex = async () => {
        const newIndex = this.state.index + 1
        let users = await this.getUsers()
        if (this.state.index <= users.data.length) {
            this.setState({
                index: newIndex
            })
        }
    }
    likingUser = (e) =>{
        console.log(e)
        this.increaseIndex()
    }
    render() {
        console.log(this.state.users)
        const filterdUsers = this.state.users.filter((user, index) => {
            return (index === this.state.index)
            })
        return (
            <div>
                {filterdUsers.map(user => {
                    return (
                        <User user={user}  likingUser={this.likingUser}/>
                    )
                }
                )}
              
            </div>
        )
    }
}


export default Users
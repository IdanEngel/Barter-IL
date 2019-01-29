import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios';


class Users extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }
    getUsers = async () => {
        let users = await Axios.get('http://localhost:8000/users')
        this.setState({
            users: users.data
        })
    }
    componentDidMount() {
        this.getUsers()
    }
    render() {
        console.log(this.state.users)
        return (
            <div>
                {this.state.users.map(user => {
                    return (
                        <div className="user-info">
                            <div>{user.name}</div>
                            <div>{user.age}</div>
                            <div>{user.location}</div>
                            <div>{user.skills}</div>
                            {/* <div>{user.skills.forEach(skill=>{
                                return(
                                    <span>{skill}</span>
                                )
                            })}</div> */}
                        </div>
                    )
                }
                )}
            </div>
        )
    }
}


export default Users
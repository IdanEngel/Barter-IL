import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Axios from 'axios';
import User from './User';
import NavBar from '../NavBar';

@inject('UserData')
@observer
class Users extends Component {
    passRoute = () => {
        let currentPage = this.props.match.url
        this.props.UserData.getCurrentPage(currentPage)
      }
    componentDidMount = () => {
        this.props.UserData.getUsers()
    }

    likingUser = async (likedUserId, likedName) => {
        console.log("here with likeduserid " + likedUserId)
        await this.props.UserData.getUsers()
        let currentUser = this.props.UserData.users
            .find(user => user.username === localStorage.getItem('username'))
       let matches= await Axios.put(`http://localhost:8000/users/${currentUser._id}`, {
            id: likedUserId
        })
        if(matches.data === 'you have a match'){
            alert(`you have a match with ${likedName}`)
        }
        console.log(likedName)
        console.log(`this is the likedID: ${likedUserId}`)
        console.log(currentUser._id)
        this.props.UserData.increaseIndex()
    }
    dislikeUser = () => {
        this.props.UserData.increaseIndex()
    }

    render() {
        const filterdUsers = this.props.UserData.users.filter((user, index) => {
            return (index === this.props.UserData.index)
        })
        this.passRoute()
        return (
            <div>
                <NavBar />
                {filterdUsers.map(user => {
                    return (
                        <div>
                            <User user={user} likingUser={this.likingUser} dislikeUser={this.dislikeUser} />

                        </div>



                    )
                }
                )}

            </div>
        )
    }
}


export default Users
import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Axios from 'axios';
import User from './User';
import NavBar from '../NavBar';
// import CurrentUser from '../UserPage/CurrentUser';
// import Carousel from 'nuka-carousel';

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

    likingUser = (likedUserId) => {
        console.log("here with likeduserid " + likedUserId)
        //insert currentUserId
        Axios.put(`http://localhost:8000/users/5c51c165c1ff0effc2683694`, {
            id: likedUserId
        })
        console.log(`this is the likedID: ${likedUserId}`)
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
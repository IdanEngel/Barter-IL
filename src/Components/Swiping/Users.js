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
    async componentDidMount() {
        await this.props.UserData.getUsers()
        this.props.UserData.setCurrentUser()
        this.shouldRender()
        console.log(this.props.UserData.users)
    }

    likingUser = async (likedUserId) => {
        console.log("here with likeduserid " + likedUserId)
        await this.props.UserData.getUsers()
        this.shouldRender()
        let currentUser = this.props.UserData.currentUser
        if (!currentUser) {
            this.props.UserData.increaseIndex();
            return;
        }
        console.log("we made it")
        Axios.put(`http://localhost:8000/users/${currentUser._id}`, {
            id: likedUserId
        })
        console.log(`this is the likedID: ${likedUserId}`)
        console.log(currentUser._id)
        this.props.UserData.increaseIndex()
    }
    dislikeUser = async (dislikeUserId) => {
        await this.props.UserData.getUsers()
        this.shouldRender()
        let currentUser = this.props.UserData.currentUser
            if (!currentUser) {
                this.props.UserData.increaseIndex();
                return;
            }
        Axios.put(`http://localhost:8000/users`, {
            currentUserId: currentUser._id,
            dislikedId: dislikeUserId
        })
        this.props.UserData.increaseIndex()
    }

    shouldRender= () => {
        let currentUser = this.props.UserData.users.find(use => use.username === localStorage.username)
        let newUsers
        for(let user of this.props.UserData.users){
            // console.log(currentUser._id === user._id)
            console.log(currentUser.likes.includes(user._id)|| currentUser.matches.includes(user._id) || currentUser.dislikes.includes(user._id) || currentUser._id === user._id)
            if(currentUser.likes.includes(user._id)|| currentUser.matches.includes(user._id) || currentUser.dislikes.includes(user._id) || currentUser._id === user._id){
                if (newUsers) {
                    newUsers = newUsers.filter(u => u._id !== user._id)
                }
                else {
                newUsers = this.props.UserData.users.filter(use => use._id !== user._id)
                console.log(this.props.UserData.users)
                }
            }
        }
        if(!newUsers) {
            console.log("no one likes you")
            newUsers = [...this.props.UserData.users]
        } 
        console.log(newUsers)
        this.props.UserData.updateUsers(newUsers)
    }
    itsMe = (user) => {
        console.log(user.name)
        console.log(this.props.UserData.users.length)
        if (user.username !== localStorage.username) {
            console.log ('its not me thx')
            return true
        }
        else if (this.props.UserData.users.length < 2){
            console.log("ITS ME")
            this.props.UserData.increaseIndex()
            return false}
        else if (this.props.UserData.raw === true) {
            console.log("i just came here for a good time and Im honestly feeling so attacked right now")
            return false
        }
        else {
            console.log("this is it m8")
            return true
        }

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
                   return this.itsMe(user) ? (
                       <div>
                            <User user={user} likingUser={this.likingUser} dislikeUser={this.dislikeUser} />

                       </div>
                    ) : null
                }
                )}

            </div>
        )
    }
}


export default Users
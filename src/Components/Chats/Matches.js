import React, { Component } from 'react';
import './Chats.css'
import { observer, inject } from 'mobx-react'
import Axios from 'axios';
import SingleMatch from './SingleMatch';


@inject('UserData', 'userLogin')
@observer
class Matches extends Component {
    constructor() {
        super()
        this.state = {
            matchedUsers: []
        }
    }
    getMatchedUsers = async () => {
        // let currentUserId = this.props.userLogin.currentUserId
        let currentUserId = localStorage.getItem('id')
        console.log(currentUserId)
        let matchedUsers = await Axios.get(`http://localhost:8000/getMatches/${currentUserId}`)
        let matchedUserData = matchedUsers.data
        this.setState({
            matchedUsers: matchedUserData
        })
        return matchedUserData
    }
    async componentDidMount() {
        this.props.UserData.setCurrentUser()
        await this.props.UserData.getUsers()
        await this.getMatchedUsers()
        this.forceUpdate()
    }
    render() {
        let matchedUsers = this.state.matchedUsers
        console.log(this.state.matchedUsers)
        return (
            <div className="singleMatch-imgDiv">
                {matchedUsers.map(match => {
                    return (<SingleMatch matchedUser={match} />)
                })}
            </div>



        )
    }
}

export default Matches
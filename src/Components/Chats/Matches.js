import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Chats.css'
import { observer, inject } from 'mobx-react'
import { async } from 'q';
import Axios from 'axios';
import SingleMatch from './SingleMatch';


@inject('UserData')
@observer
class Matches extends Component {
    constructor(){
        super()
        this.state={
            matchedUsers: []
        }
    }
    getMatchedUsers = async () => {
        //hard coded for one currentuser, need to inject currentUserId from store...
        let matchedUsers = await Axios.get(`http://localhost:8000/getMatches/5c52b92f3f410018c6aeff29`)
        let matchedUserData = matchedUsers.data
        this.setState({
            matchedUsers: matchedUserData
        })
        return matchedUserData
    }
    componentDidMount() {
        this.getMatchedUsers()
    }
    render() {
        let matchedUsers = this.state.matchedUsers
        console.log(matchedUsers)
        return (
            <div className="singleMatch-imgDiv">
                {matchedUsers.map(match=>{
                    return(<SingleMatch matchedUser={match} />)
                })}
            </div>

            

        )
    }
}

export default Matches
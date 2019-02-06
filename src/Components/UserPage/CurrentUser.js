import React, { Component } from 'react';
import './currentUserPage.css'
import { Redirect } from 'react-router-dom'
import Axios from 'axios';
import NavBar from '../NavBar';
import { observer, inject } from 'mobx-react';
import { async } from 'q';


@inject('userLogin', 'UserData', 'currentUserData')
@observer
class CurrentUser extends Component {
    constructor() {
        super()
        this.state = {
            val: false
        }
    }

    clearLS = () => {
        localStorage.clear()
        this.setState({
            val: !this.state.val
        })
    }

    componentDidMount = () => {
        let storageUser = localStorage.getItem('username')
        this.props.currentUserData.getUser(storageUser)
    }

    passRoute = () => {
        let currentPage = this.props.match.path
        this.props.UserData.getCurrentPage(currentPage)
      }
    clearLS = () => {
        localStorage.clear()
        this.setState({
            val: !this.state.val
        })
    }

    render() {
        let storage = localStorage.getItem(`username`)
        this.passRoute()
        let finalUserData = this.props.currentUserData.currentUserInformation
        let finalSkillData = this.props.currentUserData.skillsData
        // console.log(finalSkillData);
        let skillData = finalSkillData.map(m =><div className="skill">{m} </div>)
        
        return (
            <div>
                 {storage ?
                        null :
                        <Redirect to='/' />}
                <NavBar />
                <div className="currentUserPage">
                <div className="header">
                <img className="currentUser-img" src={finalUserData.imgURL} alt="currentUser-img"></img>
                <div className="name">{finalUserData.name}</div>
                </div>
                <div className="main">
                    <div className="location">{finalUserData.location}</div>
                    <div className="age">{finalUserData.age}</div>
                    <div className="skills"><strong>Skills:</strong> {skillData}</div>
                </div>
                   
                    {storage ?
                        null :
                        <Redirect to='/' />}
                    <button className="logout" onClick={this.clearLS}>Logout</button>
                </div>
            </div>
        )
    }
}
export default CurrentUser
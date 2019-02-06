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
        let skillData = finalSkillData.map(m => <div>{m} </div>)

        return (
            <div>
                {storage ?
                    null :
                    <Redirect to='/' />}
                <NavBar />
                <div className="currentUserPage">
                    <img className="currentUser-img" src={finalUserData.imgURL} alt="currentUser-img"></img>
                    <span className="name"> {finalUserData.name} {finalUserData.lastName} </span>

                        <br></br>
                        <span>
                        {finalUserData.location}
                        <br></br>
                        {finalUserData.age}
                        </span>
                    <h3>Skills: </h3>
                
                    {skillData}
                    {storage ?
                        null :
                        <Redirect to='/' />}
                    <button className="logout-button" onClick={this.clearLS}>Logout</button>
                </div>
            </div>
        )
    }
}
export default CurrentUser
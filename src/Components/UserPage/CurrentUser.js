import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import NavBar from '../NavBar';
import { observer, inject } from 'mobx-react';

@inject('userLogin', 'UserData', 'currentUserData')
@observer
class CurrentUser extends Component {
    constructor() {
        super()
        this.state = {
            val: false
        }
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
        let username = localStorage.getItem(`username`)
        this.passRoute()
        return (
            <div>
                <NavBar />
                <div className="currentUserPage">
                    <span>Hello {username}!</span>
                    <img className="currentUser-img" src="https://media.licdn.com/dms/image/C5603AQFeD2Nyr-56vw/profile-displayphoto-shrink_200_200/0?e=1551312000&v=beta&t=3HpazftYEi9LINAIQa4kyWxj2kzz_qCpkExKtIjjpco" alt="currentUser-img"></img>
                    {username ?
                        null :
                        <Redirect to='/' />}
                    <button onClick={this.clearLS}>Logout</button>
                </div>
            </div>
        )
    }
}
export default CurrentUser
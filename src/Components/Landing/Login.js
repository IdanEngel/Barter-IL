import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Users from '../Swiping/Users';
import { Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react';

@inject('userLogin')
@inject('UserData')
@observer
class Login extends Component {
    constructor() {
        super()
        this.state = {
            val: false
        }
    }

    inputHandler = (event) => {
        this.props.userLogin.inputHandler(event.target.name, event.target.value)
    }

    localStorageCheck = function () {
        let userName = localStorage.getItem(`place`)
        if (userName) {
            this.findAndRender(userName)
        }
        // else {
        //     renderer.renderLogin()
        // }
    }

    // $(`body`).on(`click`, `#loginBtn`, async function () {
    //     // console.log(`working btn`)
    //     let userName = $(`#username`).val()
    //     await findAndRender(userName)
    // })
    findAndRender = async () => {
        let username = this.props.userLogin.username
        let password = this.props.userLogin.password
        let storage = localStorage.getItem(`username`)
        await this.props.UserData.getUsers()
        let currentUser = this.props.UserData.users
            .find(user => user.username === username)
        if (currentUser && currentUser.password === password) {
            await localStorage.setItem(`username`, username)
            this.setState({
                val: !this.state.val
            })

        }

        else {
            localStorage.clear()
            alert('your username/password is incorrect, please try agaain')
        }
    }


    render() {
        let storage = localStorage.getItem(`username`)
        return (
            <div>

                <h1>Barter IL</h1>
                <div className="login-box">
                    <input placeholder="username" type="text" name="username"
                        onChange={this.inputHandler} />
                    <input placeholder="password" type="password" name="password"
                        onChange={this.inputHandler} />
                    <button onClick={this.findAndRender}>Login</button>
                    {storage ?
                        <Redirect to='/swiping' /> :
                        null}
                </div>
                <Link to="/signup">
                    <div>click here to signup</div>
                </Link>

            </div>
        )
    }
}

export default Login
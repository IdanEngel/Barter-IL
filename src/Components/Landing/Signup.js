import './Landing.css'
import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('userSignup')
class Signup extends Component {
 
    addNewUser = () => {
        this.props.userSignup.addNewUser()
        this.forceUpdate()
    }

    updatState = (event) => {
        this.props.userSignup.changeState(event.target.name, event.target.value)
    }



    render() {
        return (
            <div className="add-users">
                <label for="username">Username: </label>
                <input id="username" type="text" onChange={this.updatState} placeholder="username" name='username' />
                <label for="password">Password: </label>
                <input id="password" type="password" onChange={this.updatState} placeholder="password" name='password' />
                <label for="FN">First Name: </label>
                <input id="FN" type="text" onChange={this.updatState} placeholder="First Name" name='name' />
                <label for="SN"> Last name: </label>
                <input id="SN" type="text" onChange={this.updatState} placeholder="lastname" name='lastname' />
                <label for="location">Location: </label>
                <input id="location" type="text" onChange={this.updatState} placeholder="location" name='location' />
                <label for="skills">Skills: </label>
                <input id="skills" type="text" onChange={this.updatState} placeholder="skills" name='skills' />
                <label for="age">Age: </label>
                <input id="age" type="number" onChange={this.updatState} placeholder="age" name='age' />
                <label for="image">Image: </label>
                <input id="image" type="text" onChange={this.updatState} placeholder="image" name='imgURL' />
                <button className="button" onClick={this.addNewUser}>Signup</button>
            </div>
        )
    }
}
export default Signup;
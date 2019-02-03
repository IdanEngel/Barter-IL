import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('userLogin', 'UserData')
@observer
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
        }
    }
    passRoute = () => {
        let currentPage = this.props.match.url
        this.props.UserData.getCurrentPage(currentPage)
      }
    render() {
        this.passRoute()
        return (
            <div className="signup">
                <div className="add-inputs">
                    <label for="FN">First Name: </label>
                    <input id="FN" type="text" placeholder="First Name" name='firstname' />
                    <label for="SN"> Surname: </label>
                    <input id="SN" type="text" placeholder="Surname" name='surname' />
                    <label for="country">Country: </label>
                    <input id="country" type="text" placeholder="Country" name='country' />
                    <label for="owner">Owner: </label>
                    <input id="owner" type="text" placeholder="owner" name='owner' />
                </div>
            </div>
            
        )
    }
}
export default Signup;
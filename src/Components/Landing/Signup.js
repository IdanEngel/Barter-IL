
import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
        }
    }
    render() {
        return (
            <div class="navigation">
                <ol>
                    <li><a href="#"  data-ref="name">Name</a></li>
                    <li><a href="#"  data-ref="uname">Username</a></li>
                    <li><a href="#"  data-ref="email">Email</a></li>
                    <li><a href="#"   data-ref="viewpswd">Password</a></li>
                    <li><a href="#"  data-ref="phone">Phone</a></li>
                </ol>
            </div>
            
        )
    }
}
export default Signup;
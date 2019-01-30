import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Carousel from 'nuka-carousel';

import Axios from 'axios';

@inject('UserData')
@observer
class User extends Component {

    likingUser = () => {
        this.props.likingUser(this.props.user._id)

    }
    render() {
        const user = this.props.user

        return (
            <div>
                {/* {this.props.UserData.currentUser !== this.props.user._id ? */}
                <div className="swipe-card">
                        <div >
                    <Carousel>
                        <div className="swipeUser-info" >
                            <img src={user.imgURL}></img>
                            <div>{user.name}</div>
                            <div>{user.skills.map(skill => {
                                return (
                                    <li>{skill}</li>
                                )
                            })}
                            </div>
                            <div>{user.location}</div>
                            <div>{user.age}</div>
                        </div>
                        <div className="reviews">
                            insert reviews here for this specific user
                            
                         </div>
                    </Carousel>
                        </div>

                    <button onClick={this.props.dislikeUser}>dislike</button>
                    <button onClick={this.likingUser}>like</button>
                </div>
                {/* : null} */}

            </div>
        )
    }
}
export default User
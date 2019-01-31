import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Axios from 'axios';
import { observer, inject } from 'mobx-react'
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



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
                                <div className="text-user">
                                    <h3>{user.name}</h3>
                                    <h4>Skills:</h4>
                                    <div>{user.skills.map(skill => {
                                        return (
                                            <li>{skill}</li>
                                        )
                                    })}
                                    </div>
                                    <div>{user.location}</div>
                                    <div>{user.age}</div>
                                </div>
                            </div>
                            <div className="reviews">
                                <h1>Reviews</h1>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </Carousel>
                    </div>
                    <div className="swiping-buttons">
                    <FontAwesomeIcon  className="likeButton" onClick={this.likingUser} icon="heart"></FontAwesomeIcon>
                     <FontAwesomeIcon className="dislikeButton" onClick={this.props.dislikeUser} icon="times-circle"></FontAwesomeIcon>
                    </div>
>>>>>>> 1cd4631edb54bfc5e97e2db8103e09479b23df00


                </div>
                {/* : null} */}

            </div>
        )
    }
}
export default User
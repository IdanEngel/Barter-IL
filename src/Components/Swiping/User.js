import React, { Component } from 'react';
import './Swiping.css'
import { observer, inject } from 'mobx-react'
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



@inject('UserData')
@observer
class User extends Component {

    likingUser = () => {
        this.props.likingUser(this.props.user._id, this.props.user.name)

    }

    dislikeUser = () => {
        this.props.dislikeUser(this.props.user._id)
    }
    clearLS = () => {
        localStorage.clear()
        this.forceUpdate()
    }


    render() {
        const user = this.props.user
        return (
            <div>
                <div className="swipe-card">
                    <div >
                        <Carousel>
                            <div className="swipeUser-info" >
                                <img src={user.imgURL} alt="swipingUser-img"></img>
                                <div className="text-user">
                                    <h3>{user.name}
                                        <br></br>
                                        {user.location}
                                        <br></br>
                                        {user.age}
                                    </h3>

                                    <hr></hr>
                                    <h4>Skills:</h4>
                                    <div>{user.skills.map(skill => {
                                        return (
                                            <li>{skill}</li>
                                        )
                                    })}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1>Reviews</h1>
                                <div className="review-container">
                                    {user.reviews.map(review => {
                                        return (
                                            <div className="reviews">
                                                <div className="review-text"><strong>{review.username}</strong>:</div>
                                                <div className="review-text">{review.review}</div>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="swiping-buttons">
                    <div className="button-badge">
                       <div className="button-icon" >
                        <FontAwesomeIcon className="dislikeButton" onClick={this.dislikeUser} icon="times-circle"></FontAwesomeIcon>
                       </div>
                    </div>
                    <div className="button-badge">
                    <div className="button-icon">
                        <FontAwesomeIcon className="likeButton" onClick={this.likingUser} icon="thumbs-up"></FontAwesomeIcon>
                    </div>

                    </div>
                </div>

            </div>
        )
    }
}
export default User
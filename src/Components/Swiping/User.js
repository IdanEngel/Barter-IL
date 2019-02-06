import React, { Component } from 'react';
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
                                                        <div className="review-text">{review.username}:</div>
                                                        <div className="review-text">{review.review}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                  )
                                    })}
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    <div className="swiping-buttons">
                        <FontAwesomeIcon className="likeButton" onClick={this.likingUser} icon="heart"></FontAwesomeIcon>
                        <FontAwesomeIcon className="dislikeButton" onClick={this.props.dislikeUser} icon="times-circle"></FontAwesomeIcon>
                    </div>
                    {/* : null} */}

                </div>
            )
            // return null
        }
    }
export default User
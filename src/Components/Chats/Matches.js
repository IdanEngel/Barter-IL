import React, { Component } from 'react';
import './Chats.css'



class Matches extends Component {
    render() {
        return (
            <div className="singleMatch-imgDiv">
                    <img className="match-img" src={this.props.user.imgURL}></img>
            </div>

        )
    }
}

export default Matches
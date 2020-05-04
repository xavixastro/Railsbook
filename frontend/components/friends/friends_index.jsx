import React from 'react'
import Friend from './friend'


class FriendsIndex extends React.Component {
    render(){
        // debugger
        return (
        <div>
            <div className="friends-label">
                <img src={window.friendsURL} />
                <h3>Friends</h3>
                <h4>{this.props.users[this.props.match.params.id].friend_ids.length}</h4>
            </div>
            <ul className="friends-list">
                {this.props.users[this.props.match.params.id].friend_ids.map(friend_id => <Friend user={this.props.users[friend_id]} profile={this.props.profiles[friend_id]}/>)}
            </ul>  
        </div> 
        )
    }
}

export default FriendsIndex
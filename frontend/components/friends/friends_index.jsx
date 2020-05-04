import React from 'react'

class FriendsIndex extends React.Component {
    render(){
        return (
            <ul>
                {this.props.users[this.props.match.params.id].friend_ids.map(friend_id => this.props.users[friend_id].first_name)}
            </ul>   
        )
    }
}

export default FriendsIndex
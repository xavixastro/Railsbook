import React from 'react';

class RequestButton extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            currentUser: this.props.currentUser,
            profileUser: this.props.profileUser
        }
        this.send_request = this.send_request.bind(this);
        this.accept_request = this.accept_request.bind(this);
        this.remove_friend = this.remove_friend.bind(this);
        this.cancel_request = this.cancel_request.bind(this);

    }

    accept_request (){
        let request = this.props.requests.filter(item => item.requester_id === this.props.profileUser.id && item.user_id === this.props.currentUser.id)[0]
        this.props.createFriendship({userA: this.props.currentUser.id, userB: this.props.profileUser.id })
        this.props.deleteRequest(request.id)
        this.props.rerenderParentCallback()

    }

    send_request () {
        this.props.createRequest({user_id: this.props.profileUser.id, requester_id: this.props.currentUser.id});
        this.props.rerenderParentCallback()
    }

    remove_friend () {
        // debugger
        let friendship1 = this.props.friendships.filter(item => item.userA === this.props.currentUser.id && item.userB === this.props.profileUser.id)[0]
        let friendship2 = this.props.friendships.filter(item => item.userB === this.props.currentUser.id && item.userA === this.props.profileUser.id)[0]
        this.props.deleteFriendship(friendship1.id)
        this.props.deleteFriendship(friendship2.id)
        this.props.rerenderParentCallback()
    }

    cancel_request() {
        // debugger
        let request = this.props.requests.filter(item => item.requester_id === this.props.currentUser.id && item.user_id === this.props.profileUser.id)[0]
        this.props.deleteRequest(request.id)
        this.props.rerenderParentCallback()
    }

    render(){

        const {currentUser, profileUser} = this.props

        let button;

        //Already friends
        if (currentUser.friend_ids.includes(profileUser.id)) {
            button = <button onClick={this.remove_friend}>Remove Friend</button>
        //Friend request pending to be accepted by current user
        } else if (currentUser.received_friend_ids.includes(profileUser.id)) {
            button = <button onClick={this.accept_request}>Accept Request</button>
        //Friend request pending to be accepted by profile user
        } else if (currentUser.sent_friend_ids.includes(profileUser.id)) {
            button = <button onClick={this.cancel_request}>Requested</button>
        //Not friends
        } else {
            button = <button onClick={this.send_request}>Add Friend</button>
        }

        return(
            <div>
                {button}
            </div>
        )
    }
}

export default RequestButton
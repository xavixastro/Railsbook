import React from 'react';
import ProfilePhoto from './profile_photo';
import ProfileCover from './profile_cover';
import RequestButtonContainer from './request_button_container';
import FriendsIndexContainer from '../friends/friends_index_container';
import IntroContainer from '../intro/intro_container';


class Profile extends React.Component {

    componentDidMount(){
        this.props.fetchFriendships();
        this.props.fetchRequests();
        this.props.fetchUsers();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchProfile(this.props.match.params.id);
        }
    }

    rerenderParentCallback() {
        this.forceUpdate();
    }

    render(){

        // debugger

        if (this.props.profiles[this.props.match.params.id] === undefined) return null;

        const {currentUser} = this.props


        return ( 
            <div className="profile-main">
                <div className="profile-container">
                    <div className="profile-top">
                        <ProfileCover />
                        <h1>{this.props.users[this.props.match.params.id].first_name} {this.props.users[this.props.match.params.id].last_name}</h1>
                        <ProfilePhoto profile={this.props.profiles[this.props.match.params.id]} updateProfilePhoto={this.props.updateProfilePhoto} currentUser={currentUser} />
                        {(currentUser.id !== this.props.users[this.props.match.params.id].id) ? <RequestButtonContainer rerenderParentCallback={this.rerenderParentCallback.bind(this)}/> : ""}
                    </div>

                    <div className="profile-left">
                        <div className="profile-info">
                            <IntroContainer/>
                        </div>
                        <div className="profile-friends">
                            <FriendsIndexContainer/>
                        </div>
                    </div>


                    <div className="profile-right">
                        <div className="profile-post-form">
                            <p>POST FORM HERE</p>
                        </div>

                        <div className="profile-post-index">
                            <p>POSTS LIST HERE</p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Profile
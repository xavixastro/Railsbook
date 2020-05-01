import React from 'react';
import ProfilePhoto from './profile_photo';
import ProfileCover from './profile_cover';
import { updateProfilePhoto } from '../../util/profile_api_util';


class Profile extends React.Component {

    componentDidMount(){
        this.props.fetchProfile(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchProfile(this.props.match.params.id);
        }
    }

    render(){


        if (this.props.profiles[this.props.match.params.id] === undefined) return null;

        return ( 
            <div className="profile-main">
                <div className="profile-container">
                    <div className="profile-top">
                        <ProfileCover />
                        <h1>{this.props.users[this.props.match.params.id].first_name} {this.props.users[this.props.match.params.id].last_name}</h1>
                        <ProfilePhoto profile={this.props.profiles[this.props.match.params.id]} updateProfilePhoto={this.props.updateProfilePhoto} />
                    </div>

                    <div className="profile-left">
                        <div className="profile-info">
                            <p>PROFILE INFO HERE</p>
                        </div>
                        <div className="profile-friends">
                            <p>FRIENDS LIST HERE</p>
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
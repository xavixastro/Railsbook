import React from 'react';
import ProfilePhoto from './profile_photo';
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
            <div>
                 <h1>My Profile:</h1>
                 <h1>{this.props.users[this.props.match.params.id].first_name}</h1>
                <ProfilePhoto profile={this.props.profiles[this.props.match.params.id]} updateProfilePhoto={this.props.updateProfilePhoto}/>

                 {/* <h1>{this.props.profiles[this.props.match.params.id].about}</h1> } */}
            </div>
        )

    }
}

export default Profile
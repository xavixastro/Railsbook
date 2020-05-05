import React from 'react';
import { NavLink } from 'react-router-dom';


class FriendRequest extends React.Component {


    render(){

        const {user, profile} = this.props

        return (<div >
                    <NavLink className="friend-request"
                        to={`/users/${user.id}`}>
                        <img id="friend-request-img" src={profile.profilePhotoUrl} />
                        {`${user.first_name} ${user.last_name}`}
                    </NavLink>
                </div>)
    }
}

export default FriendRequest
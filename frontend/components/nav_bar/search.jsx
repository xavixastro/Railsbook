import React from 'react';
import { NavLink } from 'react-router-dom';


class Search extends React.Component {


    render() {

        const { user, profile } = this.props

        if (user === undefined) return null;
        if (profile === undefined) return null;

        return (<div >
            <NavLink className="friend-request"
                to={`/users/${user.id}`}>
                <img id="friend-request-img" src={profile.profilePhotoUrl} />
                <span>{`${user.first_name} ${user.last_name}`}</span>
            </NavLink>
        </div>)
    }
}

export default Search
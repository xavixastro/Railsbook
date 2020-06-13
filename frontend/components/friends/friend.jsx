import React from 'react'
import { NavLink } from 'react-router-dom';


class Friend extends React.Component {
    render() {

        const {user, profile} = this.props

        if (user === undefined) return null;
        if (profile === undefined) return null;

        return (
            <div className="friend-container">
                <div>
                    <NavLink className="friend-link"
                        to={`/users/${user.id}`}>
                        <img src={profile.profilePhotoUrl} />
                        {`${user.first_name} ${user.last_name}`}
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Friend
import React from 'react'
import { NavLink } from 'react-router-dom';


class Friend extends React.Component {
    render() {

        const {user, profile} = this.props

        return (
            <div className="friend-container">
                <img src={profile.profilePhotoUrl} />
                <div>
                    <NavLink className="friend-link"
                        to={`/users/${user.id}`}>
                        {`${user.first_name} ${user.last_name}`}
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Friend
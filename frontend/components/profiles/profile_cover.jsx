import React from 'react'

class ProfileCover extends React.Component {


    render() {
        return (
            <div className="profile-cover">
                <img src={window.coverURL}></img>
            </div>
        )
    }
}

export default ProfileCover
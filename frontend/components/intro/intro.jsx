import React from 'react'

class Intro extends React.Component {
    render(){
    
        const {profile} = this.props;

        return (
                <div>
                    <div className="intro-label">
                        <img src={window.introURL} />
                        <h3>Intro</h3>
                    </div>
                    <p className="intro-about">{profile.about || 'About me'}</p>
                    <ul className="intro-items">
                        <li><img src={window.introWorkURL} /><span>Works at <a>{profile.workplace || 'Railsbook'}</a></span></li>
                        <li><img src={window.introStudyURL} /><span>Studied at <a>{profile.education || 'App Academy'}</a></span></li>
                        <li><img src={window.introCityURL} /><span>Lives in <a>{profile.current_city || 'San Francisco, California'}</a></span></li>
                        <li><img src={window.introFromURL} /><span>From <a>{profile.hometown || 'San Francisco, California'}</a></span></li>
                        <li><img src={window.introJoinURL} /><span>Joined {new Date(profile.created_at).toLocaleDateString('en-EN', { year: 'numeric', month: 'long' })}</span></li>
                    </ul>
                </div>
        )
    }
}

export default Intro
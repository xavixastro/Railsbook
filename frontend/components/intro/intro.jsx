import React from 'react'

class Intro extends React.Component {

    constructor(props){
        super(props)
        this.state={
            edit: false,
            about: "",
            workplace: "",
            education: "",
            current_city: "",
            hometown: ""
        }
        this.toggleUpdate = this.toggleUpdate.bind(this),
        this.handleChange = this.handleChange.bind(this), 
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    toggleUpdate() {
        this.state.edit ? 
            this.setState({ edit: false }) : 
            this.setState({ edit: true, 
                about: this.props.profile.about || 'About me', 
                workplace: this.props.profile.workplace || 'Railsbook', 
                education: this.props.profile.education || 'App Academy', 
                current_city: this.props.profile.current_city || 'San Francisco, California', 
                hometown: this.props.profile.hometown || 'San Francisco, California'  
            })
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleUpdate() {
        this.props.updateProfileInfo({ 
            id: this.props.profile.id, 
            about: this.state.about, 
            workplace: this.state.workplace, 
            education: this.state.education, 
            current_city: this.state.current_city, 
            hometown: this.state.hometown })
            .then(this.setState({ edit: false }))
    }

    render(){
    
        const {profile} = this.props;

        return (
                <div>
                    <div className="intro-label">
                        <img src={window.introURL} />
                        <h3>Intro</h3>
                    </div>
                    <img className="intro-edit" onClick={this.toggleUpdate} src={window.createPostURL}></img>
                    {this.state.edit ? <textarea className="intro-about" onChange={this.handleChange("about")} value={this.state.about}/> : <p className="intro-about">{profile.about || 'About me'}</p> }
                    <ul className="intro-items">
                        <li><img src={window.introWorkURL} /><span>Works at {this.state.edit ? <input type="text" onChange={this.handleChange("workplace")} value={this.state.workplace}/> : <a>{profile.workplace || 'Railsbook'}</a>}</span></li>
                        <li><img src={window.introStudyURL} /><span>Studied at {this.state.edit ? <input type="text" onChange={this.handleChange("education")} value={this.state.education}/> : <a>{profile.education || 'App Academy'}</a>}</span></li>
                        <li><img src={window.introCityURL} /><span>Lives in {this.state.edit ? <input type="text" onChange={this.handleChange("current_city")} value={this.state.current_city}/> : <a>{profile.current_city || 'San Francisco, California'}</a>}</span></li>
                        <li><img src={window.introFromURL} /><span>From {this.state.edit ? <input type="text" onChange={this.handleChange("hometown")} value={this.state.hometown}/> : <a>{profile.hometown || 'San Francisco, California'}</a>}</span></li>
                        <li><img src={window.introJoinURL} /><span>Joined {new Date(profile.created_at).toLocaleDateString('en-EN', { year: 'numeric', month: 'long' })}</span></li>
                    </ul>
                    {this.state.edit ? <div><button onClick={this.handleUpdate}>Confirm</button> <button onClick={this.toggleUpdate}>Cancel</button></div>: ""}
                </div>
        )
    }
}

export default Intro
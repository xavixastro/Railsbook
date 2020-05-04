import React from 'react'

class ProfilePhoto extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            photoFile: null
        }
    }


    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files[0]})
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profile[id]', this.props.profile.id);
        formData.append('profile[profile_photo]', this.state.photoFile);
        this.props.updateProfilePhoto(formData)
    }

    render(){

        let saveOption;

        if (this.props.currentUser.id === this.props.profile.id){
            saveOption = (  <form onSubmit={this.handleSubmit.bind(this)}>
                                <input type="file" onChange={this.handleFile.bind(this)} />
                                <button>Save Image</button>
                            </form> )
        } else {
            saveOption = ""
        }
        return (
            <div className="profile-photo">
                <img src={this.props.profile.profilePhotoUrl} />
                {saveOption}
            </div>
        )
    }
}

export default ProfilePhoto
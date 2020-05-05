import React from 'react'

class ProfilePhoto extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            photoFile: null
        }
    }
    


    handleFile(e) {
        // this.setState({photoFile: e.currentTarget.files[0]});
        // this.handleSubmit(e);
        // e.preventDefault();
        const formData = new FormData();
        formData.append('profile[id]', this.props.profile.id);
        formData.append('profile[profile_photo]', e.currentTarget.files[0]);
        this.props.updateProfilePhoto(formData);

        // this.handleSubmit();
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('profile[id]', this.props.profile.id);
    //     formData.append('profile[profile_photo]', this.state.photoFile);
    //     this.props.updateProfilePhoto(formData)
    // }

    render(){

        let saveOption;

        if (this.props.currentUser.id === this.props.profile.id){
            saveOption = (  
                            <div>
                                {/* <form > */}
                                        <input id="files" className="file-upload" type="file" title="" onChange={this.handleFile.bind(this)} />
                                        <label for="files" className="file-upload-label">Update</label>
                                {/* </form>  */}
                            </div>
                            )
        } else {
            saveOption = ""
        }
        return (
            <div className="profile-photo">
                <img src={this.props.profile.profilePhotoUrl} />
                {/* <button className="upload_image" onClick={this.updateImage("profileImgFileRef")}>
                        <span className="btn_text">Update Photo</span>
                </button> */}
                {saveOption}
            </div>
        )
    }
}

export default ProfilePhoto
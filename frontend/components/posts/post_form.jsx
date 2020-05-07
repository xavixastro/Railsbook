import React from 'react';


class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            profile_id: this.props.profileId,
            author_id: this.props.authorId
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.setState({
                content: '',
                profile_id: this.props.match.params.id
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPost(this.state)
            .then(() => this.setState({ content: '' }));
    } 

    update() {
        return e => this.setState({ content: e.currentTarget.value });
    }

    render() {

        if (this.props.profilePhotoUrl === undefined) return null;

        return (
            <form onSubmit={this.handleSubmit} className="post-form">
                <label className="post-form-header"><img src={window.createPostURL}></img><span>Create Post</span></label>
                <div className="post-form-body">
                    <img className="post-form-avatar" src={this.props.profilePhotoUrl} />
                    <textarea
                        value={this.state.content}
                        placeholder="What's on your mind?"
                        onChange={this.update()}
                    />
                </div>
                <input type="submit" value="Post" disabled={this.state.content === ''}/>
            </form>
        )
    }
}
export default PostForm;
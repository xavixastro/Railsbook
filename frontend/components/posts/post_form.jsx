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
        return (
            <>
                <h1>Add Post</h1>
                <form onSubmit={this.handleSubmit} className="post-form">
                    <label>
                        Post:
                        <textarea
                                value={this.state.content}
                                onChange={this.update()}
                        />
                    </label>
                    
                    <input type="submit" value="Add Post" />
                </form>
            </>
        )
    }
}
export default PostForm;
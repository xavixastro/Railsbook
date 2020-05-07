import React from 'react';


class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            post_id: this.props.postId,
            user_id: this.props.userId
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.id !== this.props.match.params.id) {
    //         this.setState({
    //             content: '',
    //             post_id: this.props.match.params.id
    //         })
    //     }
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state)
            .then(() => this.setState({ content: '' }));
    }

    update() {
        return e => this.setState({ content: e.currentTarget.value });
    }

    render() {

        if (this.props.profilePhotoUrl === undefined) return null;

        return (
            <form onSubmit={this.handleSubmit} className="comment-form">
                <div className="comment-form-body">
                    <img className="comment-form-avatar" src={this.props.profilePhotoUrl} />
                    <textarea
                        value={this.state.content}
                        placeholder="Write a comment..."
                        onChange={this.update()}
                    />
                </div>
                <input type="submit" value="Comment" disabled={this.state.content === ''} />
            </form>
        )
    }
}
export default CommentForm;
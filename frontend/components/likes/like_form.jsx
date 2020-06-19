import React from 'react';


class LikeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post_id: this.props.post.id,
            user_id: this.props.userId,
            liked: this.props.likes.map(like => like.user_id).includes(this.props.userId)
        }
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
    }


    handleLike(e) {
        e.preventDefault();
        this.props.createLike(this.state);
        this.setState({liked: true})
    }

    handleDislike(e) {
        e.preventDefault();
        // debugger
        this.props.deleteLike(this.props.likes.filter(like => like.user_id === this.state.user_id)[0].id);
        this.setState({ liked: false })
    }

    render() {
        // debugger
        return (
                <div className="like-body">
                    <div>{this.props.post.like_ids.length} people like this</div>
                    {this.state.liked ? <button onClick={this.handleDislike}>Dislike</button> : <button onClick={this.handleLike}>Like</button> }
                </div>
        )
    }
}
export default LikeForm;
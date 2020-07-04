import React from 'react';


class LikeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post_id: this.props.post.id,
            user_id: this.props.userId
        }
        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
    }


    handleLike(e) {
        e.preventDefault();
        this.props.createLike(this.state);
    }

    handleDislike(e) {
        e.preventDefault();
        this.props.deleteLike(this.props.likes.filter(like => like.user_id === this.state.user_id)[0].id);
    }

    render() {
        let label, button;
        let amount = this.props.likes.length;
        let liked = this.props.likes.map(like => like.user_id).includes(this.props.userId)

        if (amount === 0) {
            label = <div></div>
            button = <img className="like-btn" src={window.likeURL} onClick={this.handleLike}></img>
        } else if (amount === 1 && liked) {
            label = <div className="like-label">You like this</div>
            button = <img className="like-btn" src={window.dislikeURL} onClick={this.handleDislike}></img> 
        } else if (amount === 1 && !liked) {
            label = <div className="like-label">1 person likes this</div>
            button = <img className="like-btn" src={window.likeURL} onClick={this.handleLike}></img>
        } else if (liked) {
            label = <div>You and {this.props.post.like_ids.length - 1} others like this</div>
            button = <img className="like-btn" src={window.dislikeURL} onClick={this.handleDislike}></img> 
        } else {
            label = <div>{this.props.post.like_ids.length} people like this</div>
            button = <img className="like-btn" src={window.likeURL} onClick={this.handleLike}></img>
        }

        // debugger
        return (
                <div className="like-body">
                    {label}
                    {button}
                </div>
        )
    }
}
export default LikeForm;
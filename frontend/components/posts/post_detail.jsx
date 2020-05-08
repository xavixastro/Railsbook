import React from 'react';
import { NavLink } from 'react-router-dom';


class PostDetail extends React.Component {

    componentDidMount() {
        this.props.requestPost(this.props.post.id);
    }

    render() {
        const { post, comments, profiles, users} = this.props;
        if (comments.length === 0) return null;
        // debugger
        return (
            <div className="post-detail">
                <ul className="post-comments">
                    {comments.reverse().map(comment => {
                        return (
                            <div className="comment" key={comment.id}>
                                <img className="comment-avatar" src={profiles[comment.user_id].profilePhotoUrl} />
                                <p className="comment-body">
                                    <span><NavLink className="post-comment-link" to={`/users/${comment.user_id}`}>{users[comment.user_id].first_name} {users[comment.user_id].last_name}</NavLink> </span>
                                    <span>{comment.content}</span>
                                </p>
                            </div>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default PostDetail;
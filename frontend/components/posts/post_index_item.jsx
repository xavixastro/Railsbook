import React from 'react';
import PostDetailContainer from './post_detail_container';
import CommentFormContainer from '../comments/comment_form_container';
import { NavLink } from 'react-router-dom';


class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            detail: true
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleClick() {
        this.setState({ detail: !this.state.detail });
    }

    handleDelete() {
        this.props.deletePost(this.props.post.id)
    }

    render() {
        // if (post === undefined) return null;
        const { post, users, profiles } = this.props;
        const profileUser = users[post.profile_id];
        const postAuthor = users[post.author_id];
        let postHeaderInfo;

        

        if (profileUser.id === postAuthor.id) {
            postHeaderInfo = <div><span><NavLink className = "post-header-link" to={`/users/${postAuthor.id}`}>{postAuthor.first_name} {postAuthor.last_name}</NavLink></span></div>
        } else {
            postHeaderInfo = <div>
                                <span><NavLink className="post-header-link" to={`/users/${postAuthor.id}`}>{postAuthor.first_name} {postAuthor.last_name}</NavLink></span>
                                <span className="post-header-arrow"> ▸ </span>
                                <span><NavLink className="post-header-link" to={`/users/${profileUser.id}`}>{profileUser.first_name} {profileUser.last_name}</NavLink></span>
                            </div>
        }


        return (
            <div className="post-index-item">
                <img className="post-header-delete" onClick={this.handleDelete} src={window.deleteURL}></img>
                <div className="post-header">
                    <img className= "post-form-avatar" src={profiles[post.author_id].profilePhotoUrl}/>
                    <div>
                        {postHeaderInfo}
                        <div className="post-header-date">{new Date(post.created_at).toLocaleDateString('en-EN', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    </div>
                </div>
                <p className="post-body">{post.content}</p>
                <label className="post-comments-toggle" onClick={this.handleClick}>{this.state.detail ? "Hide Comments" : "Show Comments" }</label>
                <CommentFormContainer postId={post.id}/>
                {this.state.detail ? <PostDetailContainer postId={post.id} /> : ''}
            </div>
        );
    }
}

export default PostIndexItem;
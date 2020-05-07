import React from 'react';
import PostDetailContainer from './post_detail_container';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            detail: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ detail: !this.state.detail });
    }

    render() {
        const { post, users, profiles } = this.props;
        const profileUser = users[post.profile_id];
        const postAuthor = users[post.author_id];
        let postHeaderInfo;

        if (profileUser.id === postAuthor.id) {
            postHeaderInfo = <div className="post-header-info"><span>{postAuthor.first_name} {postAuthor.last_name}</span></div>
        } else {
            postHeaderInfo = <div className="post-header-info">
                                <span>{postAuthor.first_name} {postAuthor.last_name}</span>
                                <span className="post-header-arrow"> ▸ </span>
                                <span>{profileUser.first_name} {profileUser.last_name}</span>
                            </div>
        }

        return (
            <div className="post-index-item" onClick={this.handleClick}>
                <div className="post-header">
                    <img className= "post-form-avatar" src={profiles[post.author_id].profilePhotoUrl}/>
                    <div>
                        {postHeaderInfo}
                        <div className="post-header-date">{new Date(post.created_at).toLocaleDateString('en-EN', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    </div>
                </div>
                <p className="post-body">{post.content}</p>
                {this.state.detail ? <PostDetailContainer postId={post.id} /> : ''}
            </div>
        );
    }
}

export default PostIndexItem;
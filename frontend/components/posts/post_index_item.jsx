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
        const { post } = this.props;

        return (
            <div className="post-index-item" onClick={this.handleClick}>
                <div className="basic-info">
                    <li>author {post.author_id}</li>
                    <li>profile {post.profile_id}</li>
                    <li>{post.content}</li>
                </div>
                {this.state.detail ? <PostDetailContainer postId={post.id} /> : ''}
            </div>
        );
    }
}

export default PostIndexItem;
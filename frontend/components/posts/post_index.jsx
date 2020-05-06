import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestPosts();
    }

    render() {
        return (
            <div className="post-index">
                <h1>All Posts</h1>
                <ul className="post-list">
                    {
                        this.props.posts.map(post => <PostIndexItem post={post} key={post.id} />)
                    }
                </ul>

            </div>
        );
    }
}
export default PostIndex;
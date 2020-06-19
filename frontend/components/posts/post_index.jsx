import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestPosts();
        this.props.requestComments();
        this.props.requestLikes();
    }

    render() {

        //validation!

        if (this.props.posts[0] === undefined) return null;

        return (
            <div className="post-index">
                <ul className="post-list">
                    {
                        this.props.posts.reverse().map(post => <PostIndexItem post={post} key={post.id} profiles={this.props.profiles} users={this.props.users} currentUser={this.props.currentUser} deletePost={this.props.deletePost} updatePost={this.props.updatePost}/>)
                    }
                </ul>

            </div>
        );
    }
}
export default PostIndex;
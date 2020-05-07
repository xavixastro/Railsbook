import React from 'react';

class PostDetail extends React.Component {

    componentDidMount() {
        this.props.requestPost(this.props.post.id);
    }

    render() {
        const { post, comments} = this.props;
        return (
            <div className="post-detail">
                <div className="post-content">
                    {post.content}
                </div>
                <ul className="post-comments">
                    <div className="post-comment columns">
                        <p>Author</p>
                        <p>Content</p>
                    </div>
                    {comments.map(comment => {
                        return (
                            <div className="post-comment" key={comment.id}>
                                <p>{comment.user_id}</p>
                                <p>{comment.content}</p>
                            </div>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default PostDetail;
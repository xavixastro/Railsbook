
import React from 'react';
import FeedPostIndexContainer from '../components/posts/feed_post_index_container';
import FeedPostFormContainer from '../components/posts/feed_post_form_container';

class Feed extends React.Component {


    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchPosts();
        this.props.fetchComments();
    }

    constructor(props) {
        super(props);
    }
  
    render() {


        if (this.props.profiles[1] === undefined) return null;


            return (
                <div className="feed-main">
                    <div className="profile-post-form">
                        <FeedPostFormContainer />
                    </div>
                    <div className="profile-post-index">
                        <FeedPostIndexContainer />
                    </div>
                </div>
            )
    }
}

export default Feed;
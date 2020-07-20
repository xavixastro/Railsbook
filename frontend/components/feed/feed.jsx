
import React from 'react';
import FeedPostIndexContainer from '../posts/feed_post_index_container';
import FeedPostFormContainer from '../posts/feed_post_form_container';
import SideBar from '../side_bar/side_bar';

class Feed extends React.Component {


    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchPosts();
        this.props.fetchComments();
        this.props.fetchLikes();
    }

    constructor(props) {
        super(props);
    }
  
    render() {

        //checking for at least one post
        if (!Object.keys(this.props.profiles).length) return null;
        if (!Object.keys(this.props.posts).length) return null;
        if (!Object.keys(this.props.comments).length) return null;
        // if (this.props.profiles[0] === undefined) return null;
        // if (this.props.posts[0] === undefined) return null;
        // if (this.props.comments[0] === undefined) return null;


        return (
            <div className="feed-main">
                <div><SideBar></SideBar></div>
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
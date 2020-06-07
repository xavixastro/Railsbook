
import React from 'react';
import FeedPostIndexContainer from '../components/posts/feed_post_index_container';
import FeedPostFormContainer from '../components/posts/feed_post_form_container';
import SideBar from './side_bar/side_bar';

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

        //checking for the first post
        if (this.props.profiles[1] === undefined) return null;
        if (this.props.posts[1] === undefined) return null;
        if (this.props.comments[1] === undefined) return null;


        return (
            <div className="feed-main">
                {/* <div><SideBar></SideBar></div> */}
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
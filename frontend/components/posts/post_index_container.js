import { connect } from 'react-redux';
import PostIndex from './post_index';
import { withRouter } from "react-router";
import { requestPosts, deletePost, updatePost } from '../../actions/posts_actions';
import { requestLikes} from '../../actions/like_actions';
import { requestComments } from '../../actions/comment_actions';
import { selectPostsByProfile } from '../../reducers/selectors';



const mapStateToProps = (state, ownProps) => ({
    posts: selectPostsByProfile(state, ownProps.match.params.id ),
    profiles: state.entities.profiles, 
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id]
    // posts: Object.values(state.entities.posts) 
    // posts: Object.values(state.entities.posts) 
});


const mapDispatchToProps = dispatch => {
    return{
        requestPosts: () => dispatch(requestPosts()),
        requestComments: () => dispatch(requestComments()),
        requestLikes: () => dispatch(requestLikes()),
        deletePost: (postId) => dispatch(deletePost(postId)),
        updatePost: (post) => dispatch(updatePost(post))
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));
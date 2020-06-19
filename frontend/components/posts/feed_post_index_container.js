import { connect } from 'react-redux';
import PostIndex from './post_index';
import { withRouter } from "react-router";
import { requestPosts, deletePost, updatePost } from '../../actions/posts_actions';
import { requestComments } from '../../actions/comment_actions';
import { requestLikes } from '../../actions/like_actions';
import { selectPostsByProfile } from '../../reducers/selectors';



const mapStateToProps = (state, ownProps) => ({
    posts: Object.values(state.entities.posts),
    profiles: state.entities.profiles,
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id]
});


const mapDispatchToProps = dispatch => ({
    requestPosts: () => dispatch(requestPosts()),
    requestComments: () => dispatch(requestComments()),
    requestLikes: () => dispatch(requestLikes()),
    deletePost: (postId) => dispatch(deletePost(postId)),
    updatePost: (post) => dispatch(updatePost(post))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));
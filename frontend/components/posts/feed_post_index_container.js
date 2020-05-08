import { connect } from 'react-redux';
import PostIndex from './post_index';
import { withRouter } from "react-router";
import { requestPosts } from '../../actions/posts_actions';
import { requestComments } from '../../actions/comment_actions';
import { selectPostsByProfile } from '../../reducers/selectors';



const mapStateToProps = (state, ownProps) => ({
    posts: Object.values(state.entities.posts),
    profiles: state.entities.profiles,
    users: state.entities.users
});


const mapDispatchToProps = dispatch => ({
    requestPosts: () => dispatch(requestPosts()),
    requestComments: () => dispatch(requestComments())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));
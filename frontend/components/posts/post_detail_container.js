
import { connect } from 'react-redux';
import PostDetail from './post_detail';
// import { selectCommentsByPost } from '../reducers/selectors';
import { requestPost } from '../../actions/posts_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts[ownProps.postId],
        // comments: selectCommentsByPost(state, ownProps.postId)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestPost: (postId) => dispatch(requestPost(postId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
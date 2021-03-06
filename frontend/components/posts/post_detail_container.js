
import { connect } from 'react-redux';
import PostDetail from './post_detail';
import { selectCommentsByPost } from '../../reducers/selectors';
import { requestPost } from '../../actions/posts_actions';
import { deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.entities.posts[ownProps.postId],
        comments: selectCommentsByPost(state, ownProps.postId), 
        profiles: state.entities.profiles,
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestPost: (postId) => dispatch(requestPost(postId)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import LikeForm from './like_form';
import { createLike, deleteLike, requestLikes } from '../../actions/like_actions';


const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        post: state.entities.posts[ownProps.postId],
        userId: parseInt(state.session.id),
        likes: Object.values(state.entities.likes).filter(like => like.post_id === ownProps.postId)
    }
}

const mapDispatchToProps = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like)),
    requestLikes: () => dispatch(requestLikes())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikeForm));
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';


const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        postId: ownProps.postId,
        userId: state.session.id,
        profilePhotoUrl: state.entities.profiles[state.session.id].profilePhotoUrl
    }
}

const mapDispatchToProps = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));
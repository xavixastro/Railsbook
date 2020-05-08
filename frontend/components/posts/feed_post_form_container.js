import { connect } from 'react-redux';
import { withRouter } from "react-router";
import PostForm from './post_form';
import { createPost } from '../../actions/posts_actions';


const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        profileId: state.session.id,
        authorId: state.session.id,
        profilePhotoUrl: state.entities.profiles[state.session.id].profilePhotoUrl
    }
}

const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));
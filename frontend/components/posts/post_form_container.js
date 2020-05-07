import { connect } from 'react-redux';
import { withRouter } from "react-router";
import PostForm from './post_form';
import { createPost} from '../../actions/posts_actions';


const mapStateToProps = (state, ownProps) => {
    // debugger
    return{
        profileId: ownProps.match.params.id,
        authorId: state.session.id
    }
}

const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));
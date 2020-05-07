import { connect } from 'react-redux';
import PostIndex from './post_index';
import { withRouter } from "react-router";
import { requestPosts } from '../../actions/posts_actions';
import { selectPostsByProfile } from '../../reducers/selectors';



const mapStateToProps = (state, ownProps) => ({
    posts: selectPostsByProfile(state, ownProps.match.params.id )
    // posts: Object.values(state.entities.posts) 
});


const mapDispatchToProps = dispatch => ({
    requestPosts: () => dispatch(requestPosts())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndex));
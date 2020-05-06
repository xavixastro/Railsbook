import { connect } from 'react-redux';
import PostIndex from './post_index';
import { requestPosts, createPost } from '../../actions/posts_actions';


const mapStateToProps = state => ({
    posts: Object.values(state.posts) 
});


const mapDispatchToProps = dispatch => ({
    requestPosts: () => dispatch(requestPosts()),
    createPost: post => dispatch(createPost(post))
});


export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
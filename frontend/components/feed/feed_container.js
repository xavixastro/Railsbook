import Feed from './feed';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/session_actions';
import { requestPosts } from '../../actions/posts_actions';
import { requestComments} from '../../actions/comment_actions';



const mapStateToProps = state => ({
    users: state.entities.users,
    profiles: state.entities.profiles,
    posts: state.entities.posts, //n
    comments: state.entities.comments,  //n
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUsers: () => dispatch(fetchUsers()),
        fetchPosts: () => dispatch(requestPosts()),
        fetchComments: () => dispatch(requestComments())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed) 
import FriendRequest from './friend_request';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.friendId],
    profile: state.entities.profiles[ownProps.friendId],

})

const mapDispatchToProps = dispatch => ({
    // logout: () => dispatch(logout()),
    // // fetchUser: (userId) => dispatch(fetchUser(userId)),
    // fetchUsers: () => dispatch(fetchUsers()),

})

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequest)
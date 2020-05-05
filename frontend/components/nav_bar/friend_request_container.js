import FriendRequest from './friend_request';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.friendId],
    profile: state.entities.profiles[ownProps.friendId],

})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendRequest)
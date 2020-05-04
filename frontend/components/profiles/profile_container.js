import { connect } from 'react-redux';
import Profile from './profile';
import { fetchProfile, fetchUsers } from '../../actions/session_actions';
import { updateProfilePhoto } from '../../actions/profile_actions';
import { fetchFriendships, fetchRequests } from '../../actions/request_actions';




const mapStateToProps = (state) => {

    return ({
        users: state.entities.users,
        profiles: state.entities.profiles,
        currentUser: state.entities.users[state.session.id]
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchProfile: (userId) => dispatch(fetchProfile(userId)),
        fetchFriendships: () => dispatch(fetchFriendships()),
        fetchRequests: () => dispatch(fetchRequests()),
        fetchUsers: () => dispatch(fetchUsers()),
        updateProfilePhoto: (profile) => dispatch(updateProfilePhoto(profile))
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchProfile } from '../../actions/session_actions';
import { updateProfilePhoto } from '../../actions/profile_actions';
import { fetchFriendships } from '../../actions/request_actions';


const mapStateToProps = (state) => {

    return ({
        users: state.entities.users,
        profiles: state.entities.profiles,
        currentUser: state.entities.profiles[state.session.id]
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchProfile: (userId) => dispatch(fetchProfile(userId)),
        fetchFriendships: () => dispatch(fetchFriendships()),
        updateProfilePhoto: (profile) => dispatch(updateProfilePhoto(profile))
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
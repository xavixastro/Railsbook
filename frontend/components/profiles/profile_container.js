import { connect } from 'react-redux';
import Profile from './profile';
import { fetchProfile } from '../../actions/session_actions'

const mapStateToProps = (state) => {

    // debugger

    return ({
        users: state.entities.users,
        profiles: state.entities.profiles
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchProfile: (userId) => dispatch(fetchProfile(userId))
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
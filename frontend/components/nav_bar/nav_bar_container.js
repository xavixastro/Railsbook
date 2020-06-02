import NavBar from './nav_bar';
import { connect } from 'react-redux';
import { logout, fetchUser, fetchUsers } from '../../actions/session_actions'



const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    profile: state.entities.profiles[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    // fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUsers: () => dispatch(fetchUsers()), 

})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
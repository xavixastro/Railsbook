import Feed from './feed';
import { connect } from 'react-redux';
// import {fetchUser } from '../actions/session_actions'

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

// const mapDispatchToProps = dispatch => ({
//     fetchUser: (userId) => dispatch(fetchUser(userId))
// })

export default connect(mapStateToProps)(Feed)
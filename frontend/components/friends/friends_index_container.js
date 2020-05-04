import {connect} from 'react-redux';
import FriendsIndex from './friends_index';
import { withRouter } from "react-router";

const mapStateToProps = (state) => ({
    profiles: state.entities.profiles,
    users: state.entities.users,
})

// const mapDispatchToProps = dispatch => ({

// })

export default withRouter(connect(mapStateToProps)(FriendsIndex))
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import RequestButton from './request_button';
import {createRequest, deleteRequest, createFriendship, deleteFriendship} from '../../actions/request_actions';



const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        profileUser: state.entities.users[ownProps.match.params.id],
        friendships: Object.values(state.entities.friendships),
        requests: Object.values(state.entities.requests)
    }
}

const mapDispatchToProps = (dispatch) => ({
    createRequest: (request) => dispatch(createRequest(request)),
    deleteRequest: (requestId) => dispatch(deleteRequest(requestId)),
    createFriendship: (request) => dispatch(createFriendship(request)),
    deleteFriendship: (friendshipId) => dispatch(deleteFriendship(friendshipId))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(RequestButton));
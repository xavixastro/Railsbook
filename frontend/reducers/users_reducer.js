import { RECEIVE_CURRENT_USER, RECEIVE_PROFILE, RECEIVE_USERS} from '../actions/session_actions'
import { RECEIVE_REQUEST, RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP, REMOVE_REQUEST } from "../actions/request_actions";


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_USERS:
            return action.payload.users
        case RECEIVE_CURRENT_USER:
            nextState[action.payload.user.id] = action.payload.user;
            return nextState;
        case RECEIVE_PROFILE:
            nextState[action.payload.user.id] = action.payload.user;
            return nextState;
        case RECEIVE_REQUEST:
            nextState[action.request.user_id].received_friend_ids.push(action.request.requester_id);
            nextState[action.request.requester_id].sent_friend_ids.push(action.request.user_id);
            return nextState;
        case RECEIVE_FRIENDSHIP:
            nextState[action.payload.friendship1.userA].friend_ids.push(action.payload.friendship1.userB)
            nextState[action.payload.friendship2.userA].friend_ids.push(action.payload.friendship2.userB)
            nextState[action.payload.friendship1.userA].received_friend_ids = nextState[action.payload.friendship1.userA].received_friend_ids.filter(item => item !== action.payload.friendship1.userB)
            nextState[action.payload.friendship1.userB].sent_friend_ids = nextState[action.payload.friendship1.userB].sent_friend_ids.filter(item => item !== action.payload.friendship1.userA)
            return nextState;
        case REMOVE_FRIENDSHIP:
            nextState[action.friendship.userA].friend_ids = nextState[action.friendship.userA].friend_ids.filter(item => item !== action.friendship.userB);
            return nextState;
        case REMOVE_REQUEST:
            nextState[action.request.user_id].received_friend_ids = nextState[action.request.user_id].received_friend_ids.filter(item => item !== action.request.requester_id)
            nextState[action.request.requester_id].sent_friend_ids = nextState[action.request.requester_id].sent_friend_ids.filter(item => item !== action.request.user_id)
        default:
            return state;
    }
}

export default usersReducer

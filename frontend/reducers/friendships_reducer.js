import { RECEIVE_FRIENDSHIP, RECEIVE_FRIENDSHIPS, REMOVE_FRIENDSHIP } from "../actions/request_actions";

const FriendshipsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_FRIENDSHIPS:
            return action.friendships
        case RECEIVE_FRIENDSHIP:
            nextState[action.payload.friendship1.id] = action.payload.friendship1;
            nextState[action.payload.friendship2.id] = action.payload.friendship2;
            return nextState;
        case REMOVE_FRIENDSHIP:
            debugger
            delete nextState[action.friendship.id];
            return nextState;
        default:
            return state
    }
}

export default FriendshipsReducer
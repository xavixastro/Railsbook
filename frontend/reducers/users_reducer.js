import { RECEIVE_CURRENT_USER, RECEIVE_PROFILE } from '../actions/session_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.payload.user.id] = action.payload.user;
            return nextState;
        case RECEIVE_PROFILE:
            nextState[action.payload.user.id] = action.payload.user;
            return nextState;
        default:
            return state;
    }
}

export default usersReducer

import { RECEIVE_CURRENT_USER, RECEIVE_PROFILE } from '../actions/session_actions'

const profilesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.payload.profile.id] = action.payload.profile;
            return nextState;
        case RECEIVE_PROFILE:
            nextState[action.payload.profile.id] = action.payload.profile;
            return nextState;
        default:
            return state;
    }
}

export default profilesReducer
import { RECEIVE_CURRENT_USER, RECEIVE_PROFILE, RECEIVE_USERS } from '../actions/session_actions';
import { RECEIVE_PROFILE_PHOTO } from '../actions/profile_actions';
import { RECEIVE_POST } from '../actions/posts_actions';


const profilesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_USERS:
            return action.payload.profiles
        case RECEIVE_CURRENT_USER:
            nextState[action.payload.profile.id] = action.payload.profile;
            return nextState;
        case RECEIVE_PROFILE:
            nextState[action.payload.profile.id] = action.payload.profile;
            return nextState;
        case RECEIVE_PROFILE_PHOTO:
            nextState[action.profile.id] = action.profile;
            return nextState;
        case RECEIVE_POST:
            nextState[action.post.profile_id].post_ids.push(action.post.id);
            return nextState;
        default:
            return state;
    }
}

export default profilesReducer
import { RECEIVE_POST_DETAIL } from '../actions/posts_actions'
import { RECEIVE_LIKE, RECEIVE_LIKES, REMOVE_LIKE } from '../actions/like_actions'

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_LIKE:
            nextState[action.like.id] = action.like;
            return nextState;
        case RECEIVE_LIKES:
            return Object.assign(nextState, action.likes)
        case RECEIVE_POST_DETAIL:
            return Object.assign(nextState, action.payload.likes);
        case REMOVE_LIKE:
            delete nextState[action.like.id]
            return nextState;
        default:
            return state;
    }


}

export default likesReducer;

import { RECEIVE_POST_DETAIL } from '../actions/posts_actions'
import { RECEIVE_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_actions'

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment;
            return nextState;
        case RECEIVE_COMMENTS:
            // debugger
            return Object.assign(nextState, action.comments)
        case RECEIVE_POST_DETAIL:
            return Object.assign(nextState, action.payload.comments);
        default:
            return state;
    }


}

export default commentsReducer;


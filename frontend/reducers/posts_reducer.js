import { RECEIVE_POST, RECEIVE_POSTS, RECEIVE_POST_DETAIL, REMOVE_POST } from '../actions/posts_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const postsReducer = (state = {}, action) => {
    Object.freeze(state); 
    const nextState = Object.assign({}, state) 
    switch (action.type) {
        case RECEIVE_POST:
            nextState[action.post.id] = action.post;
            return nextState;
        case RECEIVE_POSTS:
            return Object.assign(nextState, action.posts)
        case RECEIVE_POST_DETAIL:
            nextState[action.payload.post.id] = action.payload.post;
            return nextState;
        case RECEIVE_COMMENT:
            nextState[action.comment.post_id].comment_ids.push(action.comment.id);
            return nextState;
        case REMOVE_POST:
            delete nextState[action.post.id];
            return nextState;
        default:
            return state;
    }
}

export default postsReducer;


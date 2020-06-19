import { RECEIVE_POST, RECEIVE_POSTS, RECEIVE_POST_DETAIL, REMOVE_POST } from '../actions/posts_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

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
            delete nextState[action.post.id]
            return nextState;
        case REMOVE_COMMENT:
            nextState[action.comment.post_id].comment_ids = nextState[action.comment.post_id].comment_ids.filter(id => id !== action.comment.id);
            return nextState;
        case RECEIVE_LIKE:
            nextState[action.like.post_id].like_ids.push(action.like.id);
            return nextState;
        case REMOVE_LIKE:
            nextState[action.like.post_id].like_ids = nextState[action.like.post_id].like_ids.filter(id => id !== action.like.id);
            return nextState;
        default:
            return state;
    }
}

export default postsReducer;


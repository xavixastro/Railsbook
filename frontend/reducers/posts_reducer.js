import { RECEIVE_POST, RECEIVE_POSTS, RECEIVE_POST_DETAIL } from '../actions/posts_actions'

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
        default:
            return state;
    }
}

export default postsReducer;


import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import profilesReducer from './profiles_reducer';
import requestsReducer from './requests_reducer';
import friendshipsReducer from './friendships_reducer';
import postsReducer from './posts_reducer';
import commentsReducer from './comments_reducer';
import likesReducer from './likes_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer, 
    profiles: profilesReducer,
    requests: requestsReducer,
    friendships: friendshipsReducer,
    posts: postsReducer,
    comments: commentsReducer, 
    likes: likesReducer
});

export default entitiesReducer;
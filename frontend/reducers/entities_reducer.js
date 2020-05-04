import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import profilesReducer from './profiles_reducer';
import requestsReducer from './requests_reducer';
import friendshipsReducer from './friendships_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer, 
    profiles: profilesReducer,
    requests: requestsReducer,
    friendships: friendshipsReducer
});

export default entitiesReducer;
import { RECEIVE_REQUEST, REMOVE_REQUEST } from "../actions/request_actions";

const RequestsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_REQUEST:
            nextState[action.request.id] = action.request;
            return nextState;
        case REMOVE_REQUEST:
            delete nextState[action.request.id];
            return nextState;
        default:
            return state
    }
}

export default RequestsReducer
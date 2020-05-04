export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const REMOVE_REQUEST = "REMOVE_REQUEST";
export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const RECEIVE_FRIENDSHIPS = "RECEIVE_FRIENDSHIPS";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";

import * as APIUtil from "../util/request_api_util";

const receiveRequest = (request) => {
    return {
        type: RECEIVE_REQUEST,
        request
    }
}


const removeRequest = (requestId) => {
    return {
        type: REMOVE_REQUEST,
        requestId
    }
}

const receiveFriendship = (payload) => {
    return {
        type: RECEIVE_FRIENDSHIP,
        payload
    }
}

const receiveFriendships = (friendships) => {
    return {
        type: RECEIVE_FRIENDSHIPS,
        friendships
    }
}


const removeFriendship = (friendship) => {
    return {
        type: REMOVE_FRIENDSHIP,
        friendship
    }
}



export const createRequest = (request) => dispatch => {
    return APIUtil.createRequest(request)
        .then((request) => dispatch(receiveRequest(request)))
}

export const deleteRequest = (requestId) => dispatch => {
    return APIUtil.deleteRequest(requestId)
        .then(() => dispatch(removeRequest(requestId)))
}

export const createFriendship = (friendship) => dispatch => {
    return APIUtil.createFriendship(friendship)
        .then((payload) => dispatch(receiveFriendship(payload)))
}

export const deleteFriendship = (friendshipId) => dispatch => {
    return APIUtil.deleteFriendship(friendshipId)
        .then((friendship) => dispatch(removeFriendship(friendship)))
}



export const fetchFriendships = () => dispatch => {
    return APIUtil.fetchFriendships()
        .then((friendships) => dispatch(receiveFriendships(friendships)))
}

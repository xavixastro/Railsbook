export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const RECEIVE_REQUESTS = "RECEIVE_REQUESTS";
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


const removeRequest = (request) => {
    return {
        type: REMOVE_REQUEST,
        request
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

const receiveRequests = (requests) => {
    return {
        type: RECEIVE_REQUESTS,
        requests
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
        .then((request) => dispatch(removeRequest(request)))
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

export const fetchRequests = () => dispatch => {
    return APIUtil.fetchRequests()
        .then((requests) => dispatch(receiveRequests(requests)))
}

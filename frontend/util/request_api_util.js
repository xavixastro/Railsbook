export const createRequest = (request) => {
    return $.ajax({
        url: '/api/requests',
        method: 'POST',
        data: { request }
    })
}

export const deleteRequest = (requestId) => {
    return $.ajax({
        url: `/api/requests/${requestId}`,
        method: 'DELETE'
    })
}


export const createFriendship = (friendship) => {
    return $.ajax({
        url: '/api/friendships',
        method: 'POST',
        data: {friendship}
    })
}

export const deleteFriendship = (friendshipId) => {

    return $.ajax({
        url: `/api/friendships/${friendshipId}`,
        method: 'DELETE'
    })
}


export const fetchFriendships = () => {

    return $.ajax({
        url: '/api/friendships',
        method: 'GET'
    })
}

export const fetchRequests = () => {

    return $.ajax({
        url: '/api/requests',
        method: 'GET'
    })
}
import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS'
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'
export const RECEIVE_USERS = 'RECEIVE_USERS'



const receiveCurrentUser = (payload) => (
    {
        type: RECEIVE_CURRENT_USER,
        payload 
    }
)

const logoutCurrentUser = () => (
    {
        type: LOGOUT_CURRENT_USER,
    }
)

const receiveProfile = (payload) => (
    {
        type: RECEIVE_PROFILE,
        payload
    }
)

const receiveUsers = (payload) => (
    {
        type: RECEIVE_USERS,
        payload
    }
)

const receiveSessionErrors = (errors) => {
    return (
        {
            type: RECEIVE_SESSION_ERRORS,
            errors
        }
    )
}

const receiveSignupErrors = (errors) => {
    return (
        {
            type: RECEIVE_SIGNUP_ERRORS,
            errors
        }
    )
}





//thunk action creators

export const login = (user) => dispatch => {
    return APIUtil.login(user)
        .then(payload => dispatch(receiveCurrentUser(payload)),
            err => dispatch(receiveSessionErrors(err.responseJSON)))
}

export const signup = (user) => dispatch => {
    return APIUtil.signup(user)
        .then(payload => dispatch(receiveCurrentUser(payload)),
            err => dispatch(receiveSignupErrors(err.responseJSON)))
}

export const logout = () => dispatch => {
    return APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()),
            err => dispatch(receiveSessionErrors(err.responseJSON)))
}

//session reducer will care for this
export const fetchUser = (userId) => dispatch => {
    return APIUtil.fetchUser(userId)
        .then(payload => dispatch(receiveCurrentUser(payload)),
            err => dispatch(receiveSessionErrors(err.responseJSON)))
}

//session reducer will ignore this
export const fetchProfile = (userId) => dispatch => {
    return APIUtil.fetchProfile(userId)
        .then(payload => dispatch(receiveProfile(payload)),
            err => dispatch(receiveSessionErrors(err.responseJSON)))
}

export const fetchUsers = () => dispatch => {
    return APIUtil.fetchUsers()
        .then(payload => dispatch(receiveUsers(payload)))
}
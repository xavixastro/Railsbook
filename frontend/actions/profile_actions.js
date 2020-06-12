import * as APIUtil from '../util/profile_api_util'

export const RECEIVE_PROFILE_PHOTO = 'RECEIVE_PROFILE_PHOTO'
export const RECEIVE_PROFILE_INFO = 'RECEIVE_PROFILE_INFO'

const receiveProfilePhoto = (profile) => (
    {
        type: RECEIVE_PROFILE_PHOTO,
        profile
    }
)

const receiveProfileInfo = (profile) => (
    {
        type: RECEIVE_PROFILE_INFO,
        profile
    }
)


export const updateProfilePhoto = (profile) => dispatch => {
    return APIUtil.updateProfilePhoto(profile)
        .then(profile => dispatch(receiveProfilePhoto(profile)))
}

export const updateProfileInfo = (profile) => dispatch => {
    return APIUtil.updateProfileInfo(profile)
        .then(profile => dispatch(receiveProfileInfo(profile)))
}


import * as APIUtil from '../util/profile_api_util'

export const RECEIVE_PROFILE_PHOTO = 'RECEIVE_PROFILE_PHOTO'

const receiveProfilePhoto = (profile) => (
    {
        type: RECEIVE_PROFILE_PHOTO,
        profile
    }
)


export const updateProfilePhoto = (profile) => dispatch => {
    return APIUtil.updateProfilePhoto(profile)
        .then(profile => dispatch(receiveProfilePhoto(profile)))
}


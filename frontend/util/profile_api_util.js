export const updateProfilePhoto = (profile) => {

    return $.ajax({
        url: `/api/profiles/${profile.get('profile[id]')}`,
        method: 'PATCH',
        data: profile,
        contentType: false, 
        processData: false
    })
}
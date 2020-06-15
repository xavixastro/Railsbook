import * as LikeApiUtil from '../util/likes_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const REMOVE_LIKE = 'REMOVE_LIKE';


const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
});

const receiveLikes = (likes) => {
    return {
        type: RECEIVE_LIKES,
        likes
    };
};

const removeLike = (like) => ({
    type: REMOVE_LIKE,
    like
})



export const requestLikes = () => dispatch => {
    return LikeApiUtil.fetchLikes()
        .then(likes => dispatch(receiveLikes(likes)))
};


export const createLike = like => dispatch => {
    return LikeApiUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)))
};

export const deleteLike = likeId => dispatch => {
    return LikeApiUtil.deleteLike(likeId)
        .then(like => dispatch(removeLike(like)))
}
import * as PostApiUtil from '../util/posts_api_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POST_DETAIL = 'RECEIVE_POST_DETAIL';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REMOVE_POST = 'REMOVE_POST';


const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
});

const receivePosts = (posts) => {
    return {
        type: RECEIVE_POSTS,
        posts
    };
};

const receivePostDetail = (payload) => { 
    return {
        type: RECEIVE_POST_DETAIL,
        payload
    }
};

const removePost = (post) => {
    return {
        type: REMOVE_POST,
        post
    }
}


export const requestPosts = () => dispatch => {
    return PostApiUtil.fetchPosts() 
        .then(posts =>  dispatch(receivePosts(posts)))
};

export const requestPost = (postId) => dispatch => {
    return PostApiUtil.fetchPost(postId)
        .then(payload => {
            dispatch(receivePostDetail(payload))
        })
};

export const createPost = post => dispatch => {
    return PostApiUtil.createPost(post)
        .then(post => dispatch(receivePost(post)))
};

export const deletePost = (postId) => dispatch => {
    return PostApiUtil.deletePost(postId)
    .then(post => dispatch(removePost(post)))
}

export const updatePost = post => dispatch => {
    return PostApiUtil.patchPost(post)
    .then(post => dispatch(receivePost(post)))
}
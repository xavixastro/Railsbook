import * as CommentApiUtil from '../util/comments_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
});

const receiveComments = (comments) => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    };
};

const removeComment = (comment) => ({
    type: REMOVE_COMMENT, 
    comment
})



export const requestComments = () => dispatch => {
    return CommentApiUtil.fetchComments()
        .then(comments => dispatch(receiveComments(comments)))
};


export const createComment = comment => dispatch => {
    return CommentApiUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
};

export const deleteComment = commentId => dispatch => {
    return CommentApiUtil.deleteComment(commentId)
        .then(comment => dispatch(removeComment(comment)))
}
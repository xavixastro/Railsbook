export const selectPostsByProfile = (state, profileId) => {
    if (state.entities.profiles[profileId].post_ids === undefined) return [];
    return state.entities.profiles[profileId].post_ids
        .map(postId => {
            return state.entities.posts[postId];
        });
};

export const selectCommentsByPost = (state, postId) => {
    if (state.entities.posts[postId].comment_ids === undefined) return [];
    return state.entities.posts[postId].comment_ids
        .map(commentId => {
            return state.entities.comments[commentId];
        });
};


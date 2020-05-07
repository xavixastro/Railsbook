export const selectPostsByProfile = (state, profileId) => {
    debugger
    if (state.entities.profiles[profileId].post_ids === undefined) return [];
    return state.entities.profiles[profileId].post_ids
        .map(postId => {
            return state.entities.posts[postId];
        });
};
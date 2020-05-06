export const fetchPosts = () => {
    return $.ajax({
        url: '/api/posts',
        method: 'GET'
    });
};

export const fetchPost = (postId) => {
    return $.ajax({
        url: `/api/post/${postId}`,
        method: 'GET'
    });
};

export const createPost = (post) => {
    return $.ajax({
        url: '/api/posts',
        method: 'POST',
        data: { post }
    });
};


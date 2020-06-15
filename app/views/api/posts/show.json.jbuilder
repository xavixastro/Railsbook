json.post do
    json.extract! @post, :id, :author_id, :profile_id, :content, :created_at, :comment_ids, :like_ids
end

json.comments do
    @post.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :user_id, :post_id, :content
        end
    end
end

json.likes do 
    @post.likes.each do |like|
        json.set! like.id do 
            json.extract! like, :id, :post_id, :user_id
        end
    end
end
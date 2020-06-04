class Api::PostsController < ApplicationController

    def index
        @posts = Post.all
        render :index
    end 

    def create
        @post = Post.new(post_params)
        if @post.save
            render :info
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def show
        @post = Post.find(params[:id])
        render :show
    end

    def delete
        @post = Post.find(params[:id])
        if @post.destroy
            render :show
        else
            render json: ["Invalid action"], status: 404 #Unprocessable Entity
        end 
    end

    private
    def post_params
        params.require(:post).permit(:author_id, :profile_id, :content)
    end

end

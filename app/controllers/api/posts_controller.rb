class Api::PostsController < ApplicationController

    def index
        @posts = Post.all
        render :index
    end 

    def create
        @post = Post.new(tea_params)
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

    private
    def post_params
        params.require(:post).permit(:user_id, :profile_id, :content)
    end

end
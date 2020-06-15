class Api::LikesController < ApplicationController

    def index
        @likes = Like.all
        render :index
    end

    def create
        @like = Like.new(like_params)
        if @like.save
            render :info
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find(params[:id])
        if @like.destroy
            render :info
        else
            render json: @like.errors.full_messages, status: 404
        end
    end


    private
    def like_params
        params.require(:like).permit(:post_id, :user_id)
    end

end

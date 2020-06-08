class Api::CommentsController < ApplicationController


    def index
        @comments = Comment.all
        render :index
    end 

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :info
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def show
        @comment = Comment.find(params[:id])
        render :info
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment.destroy
            render :info
        else
            render json: @comments.errors.full_messages, status: 422
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:user_id, :post_id, :content)
    end

end

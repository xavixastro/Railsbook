class Api::FriendshipsController < ApplicationController

    def index
        @friendships = Friendship.all
        render :index
    end

    def create
        @request = Request.find_by(user_id: friendship_params[:userA])
        @request.destroy
        @friendship1 = Friendship.new({userA: friendship_params[:userA], userB: friendship_params[:userB]}) 
        @friendship2 = Friendship.new({userA: friendship_params[:userB], userB: friendship_params[:userA]}) 
        if @friendship1.save && @friendship2.save
            render :show
        else
            render json: ["Unable to accept friendship"], status: 422
        end
    end

    def destroy
        @friendship = Friendship.find(params[:id])
        if @friendship.destroy
            render json: @friendship
        else
            render json: ["Unable to delete friendship"], status: 422
        end 
    end


    private

    def friendship_params
        params.require(:friendship).permit(:userA, :userB)
    end

end

class Api::RequestsController < ApplicationController

    def index
        @requests = Request.all
        render :index
    end

    def create
        @request = Request.new(request_params) 
        if @request.save 
            render :show
        else
            render json: @request.errors.full_messages, status: 422
        end
    end

    def destroy
        @request = Request.find(params[:id])
        if @request.destroy
            render json: @request
        else
            render json: ["Unable to delete friend request"], status: 422
        end 
    end


    private

    def request_params
        params.require(:request).permit(:user_id, :requester_id)
    end


end

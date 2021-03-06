class Api::SessionsController < ApplicationController

    #Login
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ["Invalid credentials"], status: 401 #Unauthorized Error
        end
    end

    #Logout
    def destroy
        if logged_in?
            logout!
            render json: {}
        else
            render json: ["Invalid action"], status: 404 #Unprocessable Entity
        end 
    end

end

class Api::UsersController < ApplicationController

    #Sign Up
    def create
        @user = User.new(user_params)
        
        if @user.save
            @profile = Profile.create({owner_id: @user.id}) 
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end


    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name,
        :birthdate, :gender)
    end
    

end

class Api::UsersController < ApplicationController

    #Sign Up
    def create
        @user = User.new(user_params)
        
        # ActiveRecord::Base.transaction do
        #     @user.save!
        #     @profile = Profile.new({owner_id: self.id})
        #     @profile.save!
        # end

        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end


    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name,
        :birthdate, :gender)
    end
    

end

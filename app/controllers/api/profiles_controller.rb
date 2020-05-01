class Api::ProfilesController < ApplicationController

    def create
        @profile = Profile.new(profile_params)
        @profile.save
    end

    def show
    end

    def update
        # debugger
        @profile = Profile.find(params[:id])
        if @profile.update(profile_params)
            render :show
        else 
            render json: ['Unable to update'], status: 422
        end
    end

    private

    def profile_params
        params.require(:profile).permit(:owner_id, :current_city, :hometown, 
        :about, :workplace, :education, :profile_photo)
    end

end

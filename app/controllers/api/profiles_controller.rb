class Api::ProfilesController < ApplicationController

    def index
        @profiles = Profile.all
        render :index
    end

    def create
        @profile = Profile.new(profile_params)
        @profile.save
    end

    def show
        @profile = Profile.find(params[:id])
    end

    def update
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

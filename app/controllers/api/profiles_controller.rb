class Api::ProfilesController < ApplicationController

    def create
        @profile = Profile.new(profile_params)
        @profile.save
    end

    def show
    end

    def update
    end

    private

    def profile_params
        params.require(:profile).permit(:owner_id, :current_city, :hometown, 
        :about, :workplace, :education)
    end

end

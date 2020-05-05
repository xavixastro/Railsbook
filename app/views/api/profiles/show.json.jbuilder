    json.extract! @profile, :id, :about, :current_city, :hometown, :workplace, :education, :created_at
    json.profilePhotoUrl url_for(@profile.profile_photo) if @profile.profile_photo.attached?
        



 
@profiles.each do |profile|
    json.set! profile.id do
        json.extract! profile, :id, :about, :current_city, :hometown, :workplace, :education, :post_ids
        json.profilePhotoUrl url_for(profile.profile_photo) if profile.profile_photo.attached?
    end
end


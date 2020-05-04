
json.users do 
    @users.each do |user| 
        json.set! user.id do
            json.extract! user, :id, :email, :first_name, :last_name, :birthdate, :friend_ids, :received_friend_ids, :sent_friend_ids
            json.profile_id user.profile.id
        end
    end
end






json.profiles do
    @users.each do |user|
        json.set! user.profile.id do
            json.extract! user.profile, :id, :about, :current_city, :hometown, :workplace, :education
            json.profilePhotoUrl url_for(user.profile.profile_photo) if user.profile.profile_photo.attached?
        end
    end
end

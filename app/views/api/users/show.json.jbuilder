
json.user do 
    json.extract! @user, :id, :email, :first_name, :last_name, :birthdate, :friend_ids, :received_friend_ids, :sent_friend_ids
    json.profile_id @user.profile.id
end

json.profile do
    json.extract! @user.profile, :id, :about, :current_city, :hometown, :workplace, :education, :created_at, :post_ids
    json.profilePhotoUrl url_for(@user.profile.profile_photo) if @user.profile.profile_photo.attached?
end


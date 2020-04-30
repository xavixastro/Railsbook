
json.user do 
    json.extract! @user, :id, :email, :first_name, :last_name, :birthdate
    json.profile_id @user.profile.id
end

json.profile do
    json.extract! @user.profile, :id, :about
end


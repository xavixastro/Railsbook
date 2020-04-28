# == Schema Information
#
# Table name: profiles
#
#  id           :bigint           not null, primary key
#  owner_id     :integer          not null
#  current_city :string
#  hometown     :string
#  about        :text
#  workplace    :string
#  education    :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Profile < ApplicationRecord

    validates :owner_id, presence: true, uniqueness: true

    belongs_to :user,
        foreign_key: :owner_id, 
        class_name: :User

    
end

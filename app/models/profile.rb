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

    has_one_attached :profile_photo

    has_many :posts,
        foreign_key: :profile_id,
        class_name: :Post

    before_create :set_default_image

    def set_default_image 
        self.profile_photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'avatar.png')), filename: 'default-avatar.png', content_type: 'image/png')
    end
    
end

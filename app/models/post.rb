# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  profile_id :integer          not null
#  author_id  :integer          not null
#  content    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord

    validates :profile_id, :author_id, :content, presence: true

    belongs_to :author,
        foreign_key: :author_id, 
        class_name: :User

    belongs_to :profile,
        foreign_key: :profile_id, 
        class_name: :Profile

    has_many :comments, 
        foreign_key: :post_id, 
        class_name: :Comment, 
        dependent: :destroy

    
end

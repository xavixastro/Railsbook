# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  post_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Like < ApplicationRecord

    validates :post_id, :user_id, presence: true
    validates :post_id, uniqueness: { scope: :user_id }

    belongs_to :user, 
        foreign_key: :user_id, 
        class_name: :User

    belongs_to :post, 
        foreign_key: :post_id, 
        class_name: :Post

end

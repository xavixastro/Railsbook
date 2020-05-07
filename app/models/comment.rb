# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  post_id    :integer          not null
#  user_id    :integer          not null
#  content    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord

    validates :post_id, :user_id, presence: true

    belongs_to :user,
        foreign_key: :user_id, 
        class_name: :User

    belongs_to :post,
        foreign_key: :post_id, 
        class_name: :Post

end
 
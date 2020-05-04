# == Schema Information
#
# Table name: requests
#
#  id           :bigint           not null, primary key
#  user_id      :integer          not null
#  requester_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Request < ApplicationRecord

    validates :user_id, :requester_id, presence: true
    validates :user_id, uniqueness: { scope: :requester_id }

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :requester,
        foreign_key: :requester_id,  
        class_name: :User

    
end

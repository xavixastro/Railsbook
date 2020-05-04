# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  userA      :integer          not null
#  userB      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Friendship < ApplicationRecord

    validates :userA, :userB, presence: true
    validates :userA, uniqueness: { scope: :userB }
    validates :userB, uniqueness: { scope: :userA }

    belongs_to :user,
        foreign_key: :userA, 
        class_name: :User

    belongs_to :friend,
        foreign_key: :userB, 
        class_name: :User

end

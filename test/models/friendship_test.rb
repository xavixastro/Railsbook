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
require 'test_helper'

class FriendshipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

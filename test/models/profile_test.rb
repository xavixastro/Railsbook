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
require 'test_helper'

class ProfileTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

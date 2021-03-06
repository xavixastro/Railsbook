# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  birthdate       :date             not null
#  gender          :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    validates :email, :password_digest, :session_token, :first_name, :last_name, 
    :birthdate, :gender, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } #Provides a regexp for email validation.
    validates :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password

    after_initialize :ensure_session_token

    has_one :profile,
        foreign_key: :owner_id,
        class_name: :Profile

    has_many :friendships, 
        foreign_key: :userA, 
        class_name: :Friendship

    has_many :friends, 
        through: :friendships, 
        source: :friend

    has_many :received_requests,
        foreign_key: :user_id,
        class_name: :Request

    has_many :received_friends, 
        through: :received_requests,
        source: :requester

    has_many :sent_requests,
        foreign_key: :requester_id,
        class_name: :Request

    has_many :sent_friends, 
        through: :sent_requests,
        source: :user

    has_many :posts,
        foreign_key: :author_id,
        class_name: :Post

    has_many :comments,
        foreign_key: :user_id,
        class_name: :Comment
        

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end






end

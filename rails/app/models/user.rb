# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string(255)      not null
#  password_digest :string(255)      not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  include ActiveModel::SecurePassword
  has_secure_password

  has_many :social_auths

  validates :email, presence: true, uniqueness: true
  # validates :password, allow_nil: false, :if => new_record?

  def generate_auth_token
    AuthToken.issue_token(
      user_id: id,
      email: email,
      exp: 1.day.since.to_i
    )
  end
end

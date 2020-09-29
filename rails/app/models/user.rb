# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  password_digest :string(255)      not null
#  username        :string(30)       not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  include ActiveModel::SecurePassword
  has_secure_password

  validates :username, presence: true, uniqueness: true
  # validates :password, allow_nil: false, :if => new_record?

  def generate_auth_token
    AuthToken.issue_token(
      user_id: id,
      username: username,
      exp: 1.day.since.to_i
    )
  end
end

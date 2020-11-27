# == Schema Information
#
# Table name: social_auths
#
#  id         :bigint           not null, primary key
#  email      :string(255)
#  first_name :string(255)
#  last_name  :string(255)
#  photo      :string(255)
#  provider   :string(255)      not null
#  uid        :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_social_auths_on_user_id  (user_id)
#
class SocialAuth < ApplicationRecord
  belongs_to :user
end

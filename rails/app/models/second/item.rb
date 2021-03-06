# == Schema Information
#
# Table name: second_development.items
#
#  id         :bigint           not null, primary key
#  category   :string(255)
#  name       :string(255)
#  option     :string(255)      default("none")
#  price      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#
class Second::Item < ApplicationRecord
  belongs_to :user
end

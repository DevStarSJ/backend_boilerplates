# == Schema Information
#
# Table name: items
#
#  id         :bigint           not null, primary key
#  name       :string(255)
#  price      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#
class Item < SecondRecord
end

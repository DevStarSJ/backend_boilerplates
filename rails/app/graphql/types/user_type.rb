module Types
  class UserType < Base::BaseObject
    field :id, ID, null: false
    field :username, String, null: false
  end
end

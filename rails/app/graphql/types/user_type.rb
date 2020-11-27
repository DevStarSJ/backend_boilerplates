module Types
  class UserType < Base::BaseObject
    field :id, ID, null: false
    field :email, String, null: false
  end
end

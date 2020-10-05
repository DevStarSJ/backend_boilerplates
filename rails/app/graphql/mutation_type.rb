class MutationType < Base::BaseObject
  field :sign_up_user, mutation: Mutations::Users::SignUpUser
end

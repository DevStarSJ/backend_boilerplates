module Mutations
  class Users::SignUpUser < BaseMutation
    argument :username, String, required: false
    argument :password, String, required: false

    field :success, Boolean, null: true

    def resolve(params)
      user = UserService.sign_up(params.to_h)
      { success: !user.errors.present? }
    end
  end
end

class UserService
  def self.sign_up(params)
    User.create!(params)
  end

  def self.sign_in(params)
    user = User.find_by(username: params[:username])
    if user.authenticate(params[:password])
      {
        success: true,
        token: user.generate_auth_token
      }
    else
      { success: false }
    end
  end
end

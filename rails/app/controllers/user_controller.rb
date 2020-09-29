class UserController < ApplicationController
  def sign_up
    user = User.create(sign_up_params)

    render json: user
  end

  def sign_in
    user = User.find_by(username: params[:username])
    result = user.authenticate(params[:password]) ? 
      {
        success: true,
        token: user.generate_auth_token
      } : 
      { success: false }
    render json: result
  end

  def me
    render json: current_user
  end

  def sign_up_params
    params.permit(:username, :password)
  end
end
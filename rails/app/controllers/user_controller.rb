class UserController < ApplicationController
  def sign_up
    render json: UserService.sign_up(sign_up_params)
  end

  def sign_in
    render json: UserService.sign_in(sign_up_params)
  end

  def me
    render json: current_user
  end

  def sign_up_params
    params.permit(:email, :password)
  end
end

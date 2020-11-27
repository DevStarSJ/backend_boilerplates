class AuthController < ApplicationController
  def google
    user = SocialAuthService.google(omniauth_params)
    render json: user
  end

  def facebook
    user = SocialAuthService.facebook(omniauth_params)
    render json: user
  end

  private
  
  def omniauth_params
    request.env['omniauth.auth'].except('extra').to_h
  end
end

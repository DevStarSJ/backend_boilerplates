class ApplicationController < ActionController::Base
  include ErrorHandling
  
  before_action :set_raven_context

  def current_user
    token = request.headers['Authorization'].split[1]
    result = AuthToken.authenticate(token)
    return result[:user] if result[:user].present?

    raise UnauthorizedException
  end

  private

  def set_raven_context
    Raven.user_context(id: session[:current_user_id]) # or anything else in session
    Raven.extra_context(params: params.to_unsafe_h, url: request.url)
  end
end

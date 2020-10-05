class ApplicationController < ActionController::Base
  include ErrorHandling

  def current_user
    token = request.headers['Authorization'].split[1]
    result = AuthToken.authenticate(token)
    return result[:user] if result[:user].present?

    raise UnauthorizedException
  end
end

# iss, iat, exp는 아래 jwt 표준을 따름
# https://github.com/jwt/ruby-jwt#support-for-reserved-claim-names 
# https://jwt.io/

class AuthToken
  def self.issue_token(payload)
    payload[:iss] = 'Genoplan'
    payload[:iat] = Time.now.in_time_zone.to_i
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  def self.decode(token)
    JWT.decode(token, Rails.application.secrets.secret_key_base)
  end

  def self.authenticate(token)
    payload, header = decode(token)

    result = {}
    if payload['user_id']
      result[:user] = User.find(payload['user_id'])
    else
      raise UnauthorizedException.new("Invald auth token")
    end

    result
  rescue JWT::ExpiredSignature
    raise UnauthorizedException.new('Auth token is expired')
  rescue ActiveRecord::RecordNotFound => error
    raise UnauthorizedException.new("Invalid auth token: Record not found: #{error.message}")
  rescue UnauthorizedException => error
    raise error
  rescue Exception => error
    raise UnauthorizedException.new("Invalid auth token: Error: #{error.message}")
  end
end
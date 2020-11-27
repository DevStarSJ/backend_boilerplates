class SocialAuthService
  def self.apply(params)
    google(params)
  end

  def self.google(params)
    return nil unless params["provider"].present? && params["uid"].present? && params["info"].present?
    return nil unless params["provider"].include?('google')

    params = {
      provider: 'google',
      uid: params["uid"],
      email: params["info"]["email"],
      first_name: params["info"]["first_name"],
      last_name: params["info"]["last_name"],
      photo: params["info"]["image"]
    }

    social_auth = SocialAuth.where(provider: params[:provider]).find_by(uid: params[:uid])      
    return social_auth.user if social_auth.present?

    user = User.create(email: params[:email], password: params[:email])
    user.social_auths.create(params)
    user
  end
end
class SocialAuthService
  def self.apply(params)
    google(params)
  end

  def self.google(params)
    return nil unless params["provider"].present? && params["uid"].present? && params["info"].present?
    return nil unless params["provider"].include?('google')

    social_auth = SocialAuth.where(provider: 'google', uid: params["uid"]).first_or_create do |auth|
      auth.provider = 'google'
      auth.uid = params["uid"]
      auth.email = params["info"]["email"]
      auth.first_name = params["info"]["first_name"]
      auth.last_name = params["info"]["last_name"]
      auth.photo = params["info"]["image"]
      
      if auth.user_id.blank?
        user = User.create(email: params["info"]["email"])
        auth.user = user
      end
    end

    social_auth.user
  end
end
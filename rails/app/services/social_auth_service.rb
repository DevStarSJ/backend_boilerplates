class SocialAuthService
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

      link_user(auth)
    end

    social_auth.user
  end

  def self.facebook(params)
    return nil unless params["provider"].present? && params["uid"].present? && params["info"].present?
    return nil unless params["provider"] == 'facebook'

    social_auth = SocialAuth.where(provider: params["provider"], uid: params["uid"]).first_or_create do |auth|
      auth.provider = params["provider"]
      auth.uid = params["uid"]
      auth.email = params["info"]["email"]
      auth.first_name = params["info"]["name"]
      auth.photo = params["info"]["image"]

      link_user(auth)
    end

    social_auth.user
  end

  def self.naver(params)
    return nil unless params["provider"].present? && params["uid"].present? && params["info"].present?
    return nil unless params["provider"] == 'naver'

    social_auth = SocialAuth.where(provider: params["provider"], uid: params["uid"]).first_or_create do |auth|
      auth.provider = params["provider"]
      auth.uid = params["uid"]
      auth.email = params["info"]["email"]
      auth.first_name = params["info"]["name"]
      auth.photo = params["info"]["image"]

      link_user(auth)
    end

    social_auth.user
  end

  def self.line(params)
    return nil unless params["provider"].present? && params["uid"].present? && params["info"].present?
    return nil unless params["provider"] == 'line'

    social_auth = SocialAuth.where(provider: params["provider"], uid: params["uid"]).first_or_create do |auth|
      auth.provider = params["provider"]
      auth.uid = params["uid"]
      auth.email = params["info"]["email"]
      auth.first_name = params["info"]["name"]
      auth.photo = params["info"]["image"]

      link_user(auth)
    end

    social_auth.user
  end

  def self.kakao(params)
    return nil unless params["provider"].present? && params["uid"].present? && params["info"].present?
    return nil unless params["provider"] == 'kakao'

    social_auth = SocialAuth.where(provider: params["provider"], uid: params["uid"]).first_or_create do |auth|
      auth.provider = params["provider"]
      auth.uid = params["uid"]
      auth.email = params["info"]["email"]
      auth.first_name = params["info"]["name"]
      auth.photo = params["info"]["image"]

      link_user(auth)
    end

    social_auth.user
  end

  def self.link_user(auth)
    return if auth.user_id.present?

    user = User.find_by(email: auth.email)
    user = User.create(email: auth.email) if user.blank?
    auth.user = user
  end
end
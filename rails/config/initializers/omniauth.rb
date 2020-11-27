Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV['GOOGLE_CLIENT_ID'], ENV['GOOGLE_CLIENT_SECRET']
  provider :facebook, ENV['FACEBOOK_APP_ID'], ENV['FACEBOOK_APP_SECRET']
  provider :kakao, ENV['KAKAO_CLIENT_ID'] , {:redirect_path =>'/auth/kakao/callback'}
  provider :naver, ENV['NAVER_KEY'], ENV['NAVER_SECRET']
  provider :line, ENV['LINE_CHANNEL_ID'], ENV['LINE_CHANNEL_SECRET']
end
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV['GOOGLE_CLIENT_ID'], ENV['GOOGLE_CLIENT_SECRET'], access_type: 'offline', prompt: 'consent', provider_ignores_state: true, scope: 'email,profile,calendar'
# {
           #     callback_path: '/auth_callback/google_auth2',
           #     provider_ignores_state: true,
           #     scope: 'userinfo.email, userinfo.profile, youtube',
           #     # prompt: 'select_account',
           #     image_aspect_ratio: 'square',
           #     image_size: 500,
           #     prompt: 'consent', approval_prompt: 'force',
           #     skip_jwt: true,
           #     access_type: 'online'
           # }
end
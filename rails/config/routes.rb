Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post '/user/sign_up', to: 'user#sign_up'
  post '/user/sign_in', to: 'user#sign_in'
  get '/user/me', to: 'user#me'

  get 'auth/google', to: redirect('/auth/google_oauth2')
  get 'auth/google_oauth2/callback', to: 'auth#google'
  get 'auth/facebook/callback', to: 'auth#facebook'
  get 'auth/kakao/callback', to: 'auth#kakao'
  get 'kakao/oauth', to: 'auth#kakao'
  get 'auth/naver/callback', to: 'auth#naver'
  get 'auth/line/callback', to: 'auth#line'
end

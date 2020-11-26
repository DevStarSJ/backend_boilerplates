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
end

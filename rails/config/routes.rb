Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post '/user/sign_up', to: 'user#sign_up'
  post '/user/sign_in', to: 'user#sign_in'
  get '/user/me', to: 'user#me'
end

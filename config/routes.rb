Rails.application.routes.draw do
  root "users#new"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users

  # resources :posts

  resources :sessions, only: [:new, :create, :destroy]

  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'

  namespace :api do
    namespace :v1 do
      resources :users
      resources :posts
    end 
  end 

end

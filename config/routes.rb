Rails.application.routes.draw do

  root "users#new"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users

  # resources :posts
  namespace :api do
    namespace :v1 do
      resources :users
      resources :posts
    end
  end

  resources :sessions, only: [:new, :create, :destroy]
  resources :posts, only: [:index]
  resources :users, only: [:new]

  get "login", to: "sessions#create", as: "login"
  get "logout", to: "sessions#destroy", as: "logout"
  get "error", to: "users#error"
  get "*path", to: redirect("/error")
end


# PostsController
# GET /posts#index (returns html+js for the view of the posts page)
#   def index
#     (view sends fetch request as JS, JS also needs to have fetch requests for new-post edit_post on clicks, written in index.html.erb)
#   end
# UsersController
# GET /users/new
#   def new
# SessionsController
# GET /login
# POST /logout
# APIPostsController:
# /posts (GET) (returns all posts & associated user as json)
# /new_post (POST) (receives json data and stores it in the database, would return ok if saved correctly)
# /edit_post (POST) (receiving json data and updates database)
# APIUsersController

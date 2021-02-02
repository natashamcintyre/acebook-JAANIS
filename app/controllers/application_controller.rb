class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user
  add_flash_types :info, :error, :warning

  def index
    if session(:user_id)
      @user = User.find_by(id: session[:user_id])
    end 
  end

  def current_user
    if session[:user_id]
      @current_user ||= User.find_by(id: session[:user_id])
    else
      @current_user = nil
    end
  end
end

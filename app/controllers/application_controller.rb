class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user
  add_flash_types :info, :error, :warning

  def index
    @user = User.find_by(id: session[:user_id]) if session(:user_id)
  end

  def current_user
    if session[:user_id]
      @current_user ||= User.find_by(id: session[:user_id])
    else
      @current_user = nil
    end
  end
end

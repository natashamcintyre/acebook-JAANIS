class UsersController < ApplicationController
  def new
    @user = User.new
  end

  #   def create
  #     @user = User.create(user_params)
  #     redirect_to login_url, notice: "You have successfully signed up to Acebook!"
  #   end

  def create
    @user = User.create(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to posts_url
    else
      render :new
    end
  end

  private

  def home
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end

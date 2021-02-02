class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to posts_url, notice: "Logged in!"
    else
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def home
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end

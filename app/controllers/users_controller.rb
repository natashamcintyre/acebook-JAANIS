class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.save
      redirect_to login_url, notice: "You have successfully signed up to Acebook!"
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

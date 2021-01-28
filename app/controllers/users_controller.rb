class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)

    if @user.save
      redirect_to posts_url, notice: "You have successfully signed up to Acebook!"
    else
      # This could be extracted into a helper method somewhere to keep controllers skinny
      @user.errors.full_messages.each do |message|
        flash.notice ||= []
        flash.notice << message
      end
      redirect_to new_user_path
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end

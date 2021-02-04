module Api
  module V1
    class UsersController < ApplicationController
      protect_from_forgery with: :null_session
      #   @user = User.new
      # end
      def index
        users = User.all
        data = ActiveModel::Serializer::CollectionSerializer.new(users, each_serializer: UserSerializer)
        render json: data
      end
      def username
        
      end

      def create
        user = User.new(user_params)

        if user.save
          render json: UserSerializer.new(user).serialized_json
        else
          render json: { error: user.errors.messages }, status: 422
        end
        # @user = User.create(user_params)
        # redirect_to login_url, notice: "You have successfully signed up to Acebook!"
      end

      def show
        @user = User.find(params[:id])
      end

      private

      def user_params
        params.require(:user).permit(:username, :email, :password)
      end
    end
  end
end

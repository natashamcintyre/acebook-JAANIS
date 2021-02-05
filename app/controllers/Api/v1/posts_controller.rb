module Api
  module V1
    class PostsController < ApplicationController
      protect_from_forgery with: :null_session
      skip_before_action :verify_authenticity_token, :only => [:create]
      # def new
      #   @post = Post.new
      # end

      def index
        posts = Post.joins(:user).order('created_at DESC')
        data = ActiveModel::Serializer::CollectionSerializer.new(posts, each_serializer: PostSerializer)

        render json: data
      end

      def create
        user = current_user
        post = user.posts.create(post_params)

        # if post.save
        #   render json: PostSerializer.new(post).serialized_json
        # else
        #   render json: {error: post.errors.messages}, status: 422
        # end
        # @post = @user.posts.create(post_params)
        # redirect_to posts_url


      end

      def destroy
        post = Post.find(params[:id])

        if post.destroy
          head :no_content
        else
          render json: { error: post.errors.messages}, status: 422
        end
      end

      private

      def post_params
        params.require(:post).permit(:message)
      end

      def options
        @options ||= {include: %i[user]}
      end

    end
  end
end

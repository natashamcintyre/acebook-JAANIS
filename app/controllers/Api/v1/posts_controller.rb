module Api
  module V1
    class PostsController < ApplicationController
      protect_from_forgery with: :null_session
      # def new
      #   @post = Post.new
      # end

      def index
        # @post = Post.new
        # @posts = Post.all.order("created_at DESC")
        posts = Post.all
        render json: PostSerializer.new(posts, options).serialized_json
      end

      def create
        # user = current_user
        post = Post.new(post_params)

        if post.save
          render json: PostSerializer.new(post).serialized_json
        else
          render json: {error: post.errors.messages}, status: 422
        end


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
        params.require(:post).permit(:message, :created_at, :user_id)
      end

      def options
        @options ||= {include: %i[user]}
      end

    end
  end
end

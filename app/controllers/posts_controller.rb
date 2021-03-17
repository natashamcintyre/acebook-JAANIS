class PostsController < ApplicationController
  before_action :set_post, only: [:destroy]

  def index
    @post = Post.new
    @posts = Post.all.order("created_at DESC")
  end

  # def new
  #   @post = Post.new
  # end

  def update
    @post = Post.find_by(id: params[:id])
    @post.update(message: params[:post][:message])
    redirect_to posts_url
  end

  def edit
    @post = Post.find_by(id: params[:id])
  end

  def create
    @user = current_user
    @post = @user.posts.create(post_params)
    redirect_to posts_url
  end

  private

  def set_post
    @post = Post.find_by(id: params[:id])
  end

  def post_params
    params.require(:post).permit(:message, :created_at, :post_id)
  end
end

class PostsController < ApplicationController
  before_action :set_post, only: [:destroy]

  def index
    @post = Post.new
    @posts = Post.all.order("created_at DESC")
  end

  # def new
  #   @post = Post.new
  # end

  def create
    @user = current_user
    @post = @user.posts.create(post_params)
    redirect_to posts_url
  end

  def update
    if @post.update(post_params)
      redirect_to(@post.post)
    else
      render action: "edit"
    end
  end

  def destroy
    @post.destroy
    respond_to do |format|
      format.js
      format.html { redirect_to posts_url, notice: "Post deleted" }
      format.json { head :no_content }
    end
  end

  private

  def set_post
    @post = Post.find_by(id: params[:id])
  end

  def post_params
    params.require(:post).permit(:message, :created_at, :post_id)
  end
end

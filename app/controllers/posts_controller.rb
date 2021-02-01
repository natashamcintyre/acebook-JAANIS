class PostsController < ApplicationController
  # def new
  #   @post = Post.new
  # end

  def create

    @user = current_user
    @post = @user.posts.create(post_params)
    redirect_to posts_url
  end

  def index
    @post = Post.new
    @posts = Post.all.order("created_at DESC")
  end

  def update
    if @post.update(post_params)
      redirect_to(@post.post)
    else
      render action: “edit”
    end
  end

  private

  def post_params
    params.require(:post).permit(:message, :created_at, :post_id)
  end
end

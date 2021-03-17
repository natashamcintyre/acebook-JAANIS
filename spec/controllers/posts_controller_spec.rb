require "rails_helper"

RSpec.describe PostsController, type: :controller do
  describe "GET /new " do
    it "responds with 200 ok" do
      get :new
      expect(response).to have_http_status(:ok)
    end
  end

  describe "POST /" do
    it "responds with 200 and redirects to posts page" do
      post :create, params: { post: { message: "Hello, world!" } }
      expect(response).to redirect_to(posts_url)
    end

    it "creates a post" do
      post :create, params: { post: { message: "Hello, world!" } }
      expect(Post.find_by(message: "Hello, world!")).to be
    end

    # Test needs to change following login.
    it "creates a post associated with user id" do
      # user = User.create(username: "TestUsername", email: "Test@example.com", password: "password")
      post :create, params: { post: { message: "Hello, user" } }
      user = User.find_by(username: "Natasha")
      post = Post.find_by(message: "Hello, user")
      expect(post.user_id).to eq(user.id)
    end
  end

  describe "GET /" do
    it "responds with 200 ok" do
      get :index
      expect(response).to have_http_status(:ok)
    end
  end
end

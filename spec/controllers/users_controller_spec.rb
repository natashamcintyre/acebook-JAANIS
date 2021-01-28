require "rails_helper"

RSpec.describe UsersController, type: :controller do
  describe "GET /new" do
    it "responds with 200 ok" do
      get :new
      expect(response).to have_http_status(:ok)
    end
  end

  describe "POST /" do
    it "responds with 200 and redirects to posts page" do
      post :create, params: { user: { username: "Test User", email: "Test@example.com", password: "password" } }
      expect(response).to redirect_to(posts_url)
    end

    it "creates a user" do
      post :create, params: { user: { username: "Test User", email: "Test@example.com", password: "password" } }
      expect(User.find_by(username: "Test User")).to be
    end
  end

  # describe "GET /show" do
  #   it "responds with 200 ok" do
  #     get :show
  #     expect(response).to have_http_status(:ok)
  #   end
  # end
end

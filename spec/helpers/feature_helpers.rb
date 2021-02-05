def create_user
  user = User.create(username: "TestUser", email: "TestUser@example.com", password: "password")
end

def create_user_and_login
  user = User.create(username: "TestUser", email: "TestUser@example.com", password: "password")
  visit("/")
  click_link "Login"
  fill_in "email", with: "TestUser@example.com"
  fill_in "password", with: "password"
  click_button "Enter"
end

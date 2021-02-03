def signin
  user = User.create(username: "TestUser", email: "TestUser@example.com", password: "password")
  visit("/login")
  fill_in "Email", with: "TestUser@example.com"
  fill_in "Password", with: "password"
  click_button "Enter"
end

def create_user
  user = User.create(username: "TestUser", email: "TestUser@example.com", password: "password")
end

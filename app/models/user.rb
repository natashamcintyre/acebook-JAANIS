class User < ApplicationRecord
  # sets up bcrypt password encryption for user
  has_secure_password
  # Ensures presence of username and email when user is saved into the database.
  # Use these in model to make application more secure.
  # Use Javascript in html to show to user if input is incorrect
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { in: 6..10 }
  # defines relationship between users and posts so that Active Record knows how
  # to interact with the database. (We are telling it a user's id could appear
  # mutliple times in the posts table)
  has_many :posts
end

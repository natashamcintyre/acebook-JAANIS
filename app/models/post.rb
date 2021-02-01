class Post < ApplicationRecord
  # assigns a user id to a creation of a post
  belongs_to :user
  # ensures user is a valid user
  validates_associated :user
  # ensure message can't be blank
  validates :message, presence: true
end

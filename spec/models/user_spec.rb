require 'rails_helper'

RSpec.describe User, type: :model do
  it { is_expected.to be }

  # Association test - ensure user has 1:m relationship with post
  it { is_expected.to have_many(:posts) }
  # Validation tests - ensure username, email and password are present before save
  it { is_expected.to validate_presence_of(:username) }
  it { is_expected.to validate_presence_of(:email) }
  it { is_expected.to validate_presence_of(:password) }
  # Validation tests - ensure uniqueness of username and email
  it { is_expected.to validate_uniqueness_of(:username) }
  it { is_expected.to validate_uniqueness_of(:email) }
  # Validation test - ensure password length is correct
  it { is_expected.to validate_length_of(:password) }
end

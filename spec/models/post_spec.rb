require 'rails_helper'

RSpec.describe Post, type: :model do
  it { is_expected.to be }

  # Association test - ensure Post belongs to a single User
  it { is_expected.to belong_to(:user) }
  # Validation tests - ensure columns title and created_by are present before saving
  it { is_expected.to validate_presence_of(:message) }
end

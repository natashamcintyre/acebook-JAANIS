require 'rails_helper'
require_relative "../helpers/feature_helpers.rb"

RSpec.feature "Timeline", type: :feature do
  scenario "Can submit posts and view them" do
    create_user_and_login
    expect(current_path).to eq("/posts")
    fill_in "postBox", with: "Hello, world!"
    click_button "send-button"
    expect(page).to have_content("Hello, world!")
  end

  scenario "cannot submit blank posts" do
    create_user_and_login
    fill_in "post_message", with: ""
    click_button "send-button"
    # not sure what to do here.
    pending
  end
end

require 'rails_helper'
require_relative "../helpers/feature_helpers.rb"

RSpec.feature "Sign-Up", type: :feature do
  scenario "Can sign up to acebook" do
    visit "/"
    fill_in "user_username", with: "Ian"
    fill_in "user_email", with: "ian@acebook.com"
    fill_in "user_password", with: "password"
    visit "/posts"
    expect(page).to have_content("Ian")
  end

  scenario "Can sign up to acebook with hidden password" do
    visit "/"
    fill_in "user_username", with: "Ian"
    fill_in "user_email", with: "ian@acebook.com"
    fill_in "user_password", with: "hidden"
    expect(page).to_not have_content("hidden")
  end

  scenario "User cannot sign up if username is duplicated" do
    create_user
    visit "/"
    fill_in "user_username", with: "TestUser" # duplicate
    fill_in "user_email", with: "test@example.com"
    fill_in "user_password", with: "password"
    click_button "Sign Me Up!"
    expect(page).to have_button("Sign Me Up!")
  end

  scenario "User cannot sign up if email is duplicated" do
    create_user
    visit "/"
    fill_in "user_username", with: "TestUser2"
    fill_in "user_email", with: "TestUser@example.com" # duplicate
    fill_in "user_password", with: "password2"
    click_button "Sign Me Up!"
    expect(page).to have_button("Sign Me Up!")
  end

  scenario "User cannot sign up if username is missing" do
    visit "/"
    fill_in "user_email", with: "test@example.com"
    fill_in "user_password", with: "password"
    click_button "Sign Me Up!"
    expect(page).to have_button("Sign Me Up!")
  end

  scenario "User cannot sign up if email is missing" do
    visit "/"
    fill_in "user_username", with: "TestUser"
    fill_in "user_password", with: "password"
    click_button "Sign Me Up!"
    expect(page).to have_button("Sign Me Up!")
  end

  scenario "User cannot sign up if password is missing" do
    visit "/"
    fill_in "user_username", with: "TestUser"
    fill_in "user_email", with: "test@example.com"
    click_button "Sign Me Up!"
    expect(page).to have_button("Sign Me Up!")
  end

  scenario "User cannot sign up if password is too short" do
    visit "/"
    fill_in "user_username", with: "TestUser"
    fill_in "user_email", with: "test@example.com"
    fill_in "user_password", with: "pass"
    click_button "Sign Me Up!"
    expect(page).to have_button("Sign Me Up!")
  end

  scenario "User cannot sign up if password is too long" do
    visit "/"
    fill_in "user_username", with: "TestUser"
    fill_in "user_email", with: "test@example.com"
    fill_in "user_password", with: "longpassword"
    click_button "Sign Me Up!"
    expect(page).to have_button("Sign Me Up!")
  end
end

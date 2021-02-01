# AceBook
by JAANIS

1. [You can find the engineering project outline here.](https://github.com/makersacademy/course/tree/master/engineering_projects/rails)

Jaanis' Code Climate Link:
https://codeclimate.com/github/Aracho1/acebook-JAANIS

REQUIRED INSTRUCTIONS:

2. [The card wall is here.](https://trello.com/b/mU9Va6vg/team)

## How to contribute to this project
See [CONTRIBUTING.md](CONTRIBUTING.md)

## Quickstart

First, clone this repository. Then:

```bash
> bundle install
> bin/rails db:create
> bin/rails db:migrate

> bundle exec rspec # Run the tests to ensure it works
> bin/rails server # Start the server at localhost:3000
```

##
=======
### User Stories

**User Sign Up:**
```
As a user of ACEBOOK
So I can post something in my name
I want to sign up.
```
**Planning:**

In routes.rb:
```
resources: users
```

-> button "Sign Up" on homepage which links to users/new page - index.html.erb

-> users/new will be a form containing: -
  - email address
  - username
  - password
  - Sign Me Up

-> save user in database: id, email, username, encrypted password (encrypted password assigned to validation ticket)

-> if save didn't work, redirect back to form with error messages (assigned to validation ticket)

-> else
  - user is logged in (sessions/new)
  - redirect to user's posts page
  - receive message to say successful sign up!

| Class | User |
----|----
| Properties | username, email, password |
| Methods | < ApplicationRecord |

User Table
id | username | email | password
-|-|-|-

To create user table, we did:
```
bin/rails generate model User username:string email:string password:string
bin/rails db:migrate
```
============================

**Further Research**

Linking Users to Posts:

class User < ActiveRecord
  has many: posts
end

class Post < A....
  belongs_to: user
end

===============================

**Reminders**

migration files for drop tables will need to be deleted once everyone (including Heroku) has run db:migrate

a line of code in the create posts method in the posts controller will need to be changed once we can store user details. At the moment a new user is created when a new post is created - obvs not ideal!


<div class="container p-3">
  <div class="row m-auto">
    <div class="col-lg-10 col-md-6 m-auto writing-post">
      <%= form_for @post do |form| %>
      <div class="m-3 d-flex flex-column">
        <%= form.text_area :message, placeholder: "What are you thinking?..." %>
      </div>
      <%= button_tag type: "submit", class: "send-post", id: "send-button" do %>
      <i class='fas fa-paper-plane'></i>
      <% end %>
      <% end %>
    </div>
    <hr>
    <div class="col-lg-10 col-md-6 m-auto">
      <h3 class="text-center"><i class='fas fa-paper-plane'></i> All posts</h3>
      <div class="d-flex flex-column">
        <% @posts.each do |post| %>
        <div class="post d-flex flex-row">
          <div class="post-img">
            <%= image_tag("user", width: 50) %>
          </div>
          <div class="post-content  d-flex flex-column">
            <p class="post-text"><%= post.message %></p>
            <span class="post-date align-self-end">Posted by <span class="username"><%= post.user.username %></span> at
              <%= post.created_at.strftime("%H:%M %A %B %-d") %></span>
          </div>
        </div>
        <% end %>
      </div>
    </div>
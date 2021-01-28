# AceBook
by JAANIS

REACT!!!
The start of getting that blasted like button to work... https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute
It took a helluva lot longer than 1 minute.

1. "Add dom container to html.erb file".

Yep, works, just give it any id you want.

<div id="like_button_container"></div>

2. "Add script tags to html file".

No. This did **not** work, because we are writing in html.erb, not html. Instead, use the following syntax:

<%= javascript_include_tag "https://unpkg.com/react@17/umd/react.development.js" %>

I have put both react scripts into the head of the application.html.erb file in the hope that this will include react in every (single!) page of our app.

The other script, our "like_button.js" file, was added at the end of the index.html.erb:

<%= javascript_include_tag("like_button.js")%>

This would only work if the file was in the "assets" pipeline - something to do with rails.

Then, of course, it freaked out because we hadn't specifically told it to "precompile" the file, which I _think_ means it needs to know about the file, but I'm not really sure... so I added the appropriate line in the appropriate place (as suggested by the website error message):

In config/initializers/assets.rb:
```
Rails.application.config.assets.precompile += %w( like_button.js )
```

but I don't really understand it because then, OF COURSE, it had a HUGE freakout (or maybe I did) because for some reason the script was running before anything else, including the application.html.erb script, which meant that it kept throwing the error that React was not defined. I found out it's something to do with the require_tree, so I removed that line and TADA it worked!! Now we will probably find that the require_tree is actually needed for other functionality... :facepalm:

I tried to remove the precompile instruction and replace the require_tree thing, probably because I feel they're doing similar things, but apparently they're not.

My conclusion is that we now have 2 options: EITHER we need to do this for .js component we create, OR we can make an overall App.js (which is required using the <%= javascript_include_tag("app.js")%> as above) which in itself includes all of the other files. If that's possible.

3. Create the component yada yada yada...

Yes, something to do with something in this file. At least there is an example that is working that we can copy from now :)

Chuffed I did it. Now clocking off.


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
  - Sign Me Up!

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

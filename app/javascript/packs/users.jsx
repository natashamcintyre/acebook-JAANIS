// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <div>Hello {props.name}!</div>
)


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <>
    <div className="container p-3">

<div className="row">
  <div classNameName="col-lg-7 col-md-6 d-none d-md-block d-lg-block ">
    <h2>Acebook helps you connect with the world</h2>
    <h3>Sign up now and start talking to your friends</h3>
    <div className="d-flex flex-column">
      <div className="post d-flex flex-row">
        <div className="post-img">
            <img alt="Logo" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_24787.png&f=1&nofb=1" className="profile-img"></img>
        </div>
        <div className="post-content  d-flex flex-column">
          <p className="post-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"</p>
          <span className="post-date align-self-end">Posted by Ian one day ago</span>
        </div>
      </div>
      <div className="post d-flex flex-row">
        <div className="post-img">
            <img alt="Logo" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_24787.png&f=1&nofb=1" className="profile-img"></img>
        </div>
        <div className="post-content  d-flex flex-column">
          <p className="post-text">Hey guys, Just joined acebook! It's the best</p>
          <span className="post-date align-self-end">Posted by Aman187 two days ago</span>
        </div>
      </div>
      <div className="post d-flex flex-row">
        <div className="post-img">
            <img alt="Logo" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_24787.png&f=1&nofb=1" className="profile-img"></img>
        </div>
        <div className="post-content  d-flex flex-column">
          <p className="post-text">Hey guys, Just joined acebook! It's the best</p>
          <span className="post-date align-self-end">Posted by Aman187 two days ago</span>
        </div>
      </div>
    </div>

  </div>
  <div className="col-11 col-md-6 col-lg-4 signup-box align-self-start">
  {/* <% flash.each do |type, msg| %>
<div>
  <%= msg %>
</div>
<% end %> */}
  <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <a className="nav-link active" id="signup-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><h2 className="text-center">Sign up</h2></a>
    </li>
    <li className="nav-item" role="presentation">
      <a className="nav-link" id="login-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><h2 className="text-center">Login</h2></a>
    </li>
  </ul>
  <div className="tab-content" id="myTabContent">
    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="signup-tab">
    {/* <%= form_for @user do |form| %>
      <div className="m-3 d-flex flex-column">
          <%= form.label :username %>
          <%= form.text_field :username, :required => true %>
          <span id="usernameHelp" className="form-text align-self-end">Choose your username.</span>
        </div>
        <div className="m-3 d-flex flex-column">
          <%= form.label :email %>
          <%= form.email_field :email, :required => true %>
          <span className="error" aria-live="polite"></span>
          <span id="emailHelp" className="form-text align-self-end">We'll never share your email with anyone else.</span>
        </div>
        <div className="m-3 d-flex flex-column">
          <%= form.label :password %>
          <%= form.password_field :password, minlength: 8, :required => true %>
          <span className="error" aria-live="polite"></span>
          <span id="passwordHelp" className="form-text align-self-end">Min 8 characters</span>
        </div>
        <div className="m-3 d-flex flex-column text-center">
          <span id="accept" className="form-text m-3">By creating an account you are accepting the <a href="">terms</a> and <a href="">conditions</a></span>
          <%= form.submit "Sign Me Up!" %>
        </div>
      <% end %> */}
    </div>
    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="login-tab">
    {/* <%= render "/sessions/new" %> */}
    </div>
  </div>
  </div>
</div>
</div>
    </>,
    document.body.appendChild(document.createElement('div')),
  )
})

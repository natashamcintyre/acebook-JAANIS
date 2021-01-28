window.onload = function() {
  const userForm = document.getElementById('user-sign-up-form')

  const email = document.getElementById('user_email')

  const emailError = document.querySelector('#user_email + span.error')

  email.addEventListener('input', function (event) {
    if (email.validity.valid) {
      emailError.textContent = '';
      emailError.className = 'error';
    } else {
      showError();
    }
  });

  function showError() {
    if (email.validity.valueMissing) {
      emailError.textContent = "You need to enter an email address."
    } else if (email.validity.typeMismatch) {
      emailError.textContent = "Entered value needs to be an email address."
    }
    emailError.className = 'error active';
  }



  const password = document.getElementById('user_password')

  const passwordError = document.querySelector('#user_password + span.error')

  password.addEventListener('input', function (event) {
    if (password.validity.valid) {
      passwordError.textContent = '';
      passwordError.className = 'error';
    } else {
      passwordShowError();
    }
  });

  function passwordShowError() {
    if (password.validity.valueMissing) {
      passwordError.textContent = "You need to enter a password."
    } else if (password.validity.tooShort) {
      passwordError.textContent = "Password too short."
    }
    passwordError.className = 'error active';
  }

}

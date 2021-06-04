// function for signup
const signupFormHandler = async function(event) {
    // prevent default
    event.preventDefault();

    // selecting input from frontend and assigning them to variables
    const username = document.querySelector('#username-input-signup');
    const password = document.querySelector('#password-input-signup');
    // posting username and password to database as JSON
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    // if we get a 200, redirect the user to the dashboard page
    if (response.ok) {
      document.location.replace('/dashboard');
      // otherwise, signup failed, notify user
    } else {
      alert('An error occurred -- failed to sign up');
    }
  };
  
  // event listener for signup form
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
  
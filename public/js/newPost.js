// handle new post
const newPostHandler = async function(event) {
    // prevent default
    event.preventDefault();
    // getting value of the user input for the title and body of a post and assigning them to a variable
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
    // posting the user input as JSON
    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    // redirect user to dashboard after submitting new post
    document.location.replace('/dashboard');
  };
  // event listener
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newPostHandler);
  
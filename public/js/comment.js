// function to handle comments
const commentFormHandler = async function(event) {
    // prevent default
    event.preventDefault();
    // getting values from user input and assigning to a variable
    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
    // if there is a value in the body
    // then post the data along with the post ID as JSON to the comment endpoint
    if (body) {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          postId,
          body
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // reload when done
      document.location.reload();
    }
  };
  // event handler
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);
  
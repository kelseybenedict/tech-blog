// getting value of post ID
const postId = document.querySelector('input[name="post-id"]').value;
// function to edit a post
const editPostHandler = async function (event) {
    // prevent default
    event.preventDefault();
    // getting the values from user input for title and body and assigning them to variables
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;

    // updating their changes to the post with the specific post ID as JSON
    await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // redirecting user when they are done to the dashboard
    document.location.replace('/dashboard');
};
// function to delete a post by post ID
const deleteClickHandler = async function () {
    await fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    });
    // redirecting user when they are done to the dashboard
    document.location.replace('/dashboard');
};

// event listeners
document
    .querySelector('#edit-post-form')
    .addEventListener('submit', editPostHandler);
document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteClickHandler);

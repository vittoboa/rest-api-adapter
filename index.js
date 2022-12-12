const app = require('express')();

// start server
const PORT = 8080;
app.listen(
    PORT,
    () => console.log(`API is listening on port ${PORT}`)
);

// return all posts of the user with the given id, including up to 5 comments for each post
app.get('/users/:userId/custom-posts', async (req, res) => {
    const { userId } = req.params;

    // fetch all posts of the user with the given id
    const posts_res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts/`);
    let posts = await posts_res.json();

    // respond with 404 code if there are no posts for the given user
    if (!posts.length) {
        res.sendStatus(404);
        return;
    }

    // add comments to each post
    for (let post of posts) {
        // fetch all comments of the post
        const comments_res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments/`);
        const comments = await comments_res.json();

        // add at most the first 5 comments
        post.comments = comments.slice(0, 5);
    }

    // respond with the list of custom posts
    res.json(posts);
});

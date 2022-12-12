const app = require('express')();

// start server
const PORT = 8080;
app.listen(
    PORT,
    () => console.log(`API is listening on port ${PORT}`)
);

// return all posts of the user with the given id
app.get('/users/:userId/custom-posts', async (req, res) => {
    const { userId } = req.params;

    // fetch all posts of the user with the given id
    const posts_res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts/`);
    const posts = await posts_res.json();

    // respond with 404 code if there are no posts for the given user
    if (!posts.length) {
        res.sendStatus(404);
        return;
    }

    // respond with the list of posts
    res.json(posts);
});

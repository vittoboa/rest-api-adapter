const app = require('express')();

// start server
const PORT = 8080;
app.listen(
    PORT,
    () => console.log(`API is listening on port ${PORT}`)
);

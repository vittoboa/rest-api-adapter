# REST API adapter
An implementation of a REST API adapter for the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) api.

The program exposes a http server, which in turn, exposes a GET endpoint. It allows to fetch all posts of a user with a given id, including up to five comments for each post. The responses are in JSON.
# REST API adapter
An implementation of a REST API adapter for the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) api.

The program exposes a http server, which in turn, exposes a GET endpoint. It allows to fetch all posts of a user with a given id, including up to five comments for each post. The responses are in JSON.

## Technologies
* [Node.js](https://nodejs.org/en/) _(tested with version 18.12.1)_
* [Express.js](https://expressjs.com/) _(tested with version 4.18.2)_

## Execution
The following steps can be followed to run the application:
```
# Clone this repository
$ git clone https://github.com/vittoboa/rest-api-adapter.git

# Navigate inside the repository
$ cd rest-api-adapter

# Run the application
$ node .
```

## Sample requests
Sample requests to the API can be sent with _curl_ or software platforms like _[Postman](https://www.postman.com/)_, _[Insomnia](https://insomnia.rest/)_, etc.

When the application is executed in _localhost_, the URL of the request should follow the format:
```
http://localhost:8080/users/<userId>/custom-posts
```
Where \<userId\> is the id of the user whose posts and comments should be returned by the API.

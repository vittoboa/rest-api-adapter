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

## Sample responses
### Status code 200
A JSON response will be returned whenever there are posts for the user with the given id. It will contain a list of all posts of the given user. Each post will have a _userId_, a post _id_, a _title_, a _body_, and a list of up to 5 _comments_. Each comment will have a _postId_, a comment _id_, the commenter _name_, the commenter _email_, and a _body_.

For instance, the following is the beginning of the response for the request to the URL <span>_http://</span>localhost:8080/users/1/custom-posts_
```
[
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "comments": [
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
            /* other comments ... */
        ]
    },
    /* other posts ... */
]
```

### Status code 404
A 404 status code will be returned if there are no posts for the user with the given id.

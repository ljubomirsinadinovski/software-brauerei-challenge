# 04 - create a basic Spring Boot API

## Mission
Create a running Spring Boot API with a GET and a POST Endpoint which will provide sample data. You have to add a query parameter to the get request with your name and expect this name as output. For the post request the same behaviour is expected but instead of a query parameter it should be a value in the request body.

## Input
For Input you have to create an API testing file (ex. Postman, Paw, etc.) and call your service with the query parameter or the request body.
example for get: https://localhost:5000?name=Jesus

## Expected Output
```json
Hello Jesus!
```
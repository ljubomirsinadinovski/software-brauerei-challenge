# SETUP
This project is initialized using Maven and Java 11 with Sping Boot version 3.0.6
The dependency added when initializing the project is Spring Web.

In order to run the project open it through inteliJ (community version available for free) and start the server

At the moment the server is running on the default port but it can be used on port 5000 as well (configure it inside: `echo/src/main/resources/application.properties`)

There are 2 endpoints that can be hit (please use https instead of http):

(GET REQUEST)
https://localhost:8080?name=Jesus

(POST REQUEST)
https://localhost:8080   // attach in the body `Jesus`
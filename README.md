# JMAL Chat App Back-End

The RESTful Service and Back-End processes that power the JMAL Chat Application - a chat-based CRM with a similar design to popular modern CRM's.

The finished project will consist of the following:

1. A website that hosts an Admin Area - see [JMAL Chat App Website](https://github.com/JMALApplications/jmal-chat-app-website)
   - Website owners will be "Chat Operators" and the Admin Area will allow them to interact with website visitors via a front-end chat-box.
2. A RESTful Service
3. A chat-box that can be injected into the front-end of almost any website
   - When a user signs up for the JMAL Chat Application, they will enter the domain for their website. Once the user's website is verified,
   the user will implement a script on their site that connects to the JMAL Chat Application Admin Area.

**This project is still under development and is not yet in production.**

## API Table of Contents

api
 - controllers
   - conversations.js - The controller that handles requests related to visitor conversations
   - user.js - The controller that handles API Authentication
   - visitors.js - The controller that handles requests related to visitors
 - middleware
   - api-auth.js - Handles user API Authentication via JSON Web Tokens
 - models
   - conversation.js - Mongoose Model and Schema for visitor conversations
   - user.js - Mongoose Model and Schema for API users
   - visitor.js - Mongoose Model and Schema for visitors
 - routes
   - conversations.js - Contains all REST routes and allowed HTTP operations related to visitor conversations
   - user.js - Contains all REST routes and allowed HTTP operations related to API users
   - visitors.js - Contains all REST routes and allowed HTTP operations related to visitors

## API Resource Reference

`Conversations`

- `/conversations`
  - `GET`
    - Returns all visitor conversations
  - `DELETE`
    - `visitor_id` (required) - send in request body
    - Deletes a specified visitor conversation

- `/conversations/:visitor_id`
  - `POST`
    - `visitor_id` (required) - send as route parameter
    - Create a new visitor conversation
  - `GET`
    - `visitor_id` (required) - send as route parameter
    - Get an existing visitor conversation
  - `PATCH`
    - `visitor_id` (required) - send as route parameter
    - Update an existing visitor conversation

`Visitors`

- `/visitors`
  - `GET`
    - Returns all past and existing visitors
  - `POST`
    - Creates a new Visitor

- `/visitors/:visitor_id`
  - `GET`
    - `visitor_id` (required) - send as route parameter
    - Returns a specified visitor

- `/visitors/:visitor_id/VisitorOnline`
  - `PATCH`
    - `visitor_id` (required) - send as route parameter
    - Updates a specified visitor's online status

- `/visitors/:visitor_id/VisitorName`
  - `PATCH`
    - `visitor_id` (required) - send as route parameter
    - Updates a specified visitor's name

- `/visitors/:visitor_id/VisitorBrowser`
  - `PATCH`
    - `visitor_id` (required) - send as route parameter
    - Updates a specified visitor's browser

- `/visitors/:visitor_id/VisitorPhone`
  - `PATCH`
    - `visitor_id` (required) - send as route parameter
    - Updates a specified visitor's phone number

- `/visitors/:visitor_id/VisitorEmail`
  - `PATCH`
    - `visitor_id` (required) - send as route parameter
    - Updates a specified visitor's email address

`User`

- `/user/signup`
  - `POST`
    - `Email` (required) - send in request body
    - `Password` (required) - send in request body
    - Create a new API user

- `/user/login`
  - `POST`
    - `Email` (required) - send in request body
    - `Password` (required) - send in request body
    - Login an existing API user

- `/user/:id`
  - `DELETE`
    - `id` (required) - send as route parameter
    - Delete an existing API user

## Dependencies

* NodeJS
* ExpressJS
* bcrypt
* dotenv
* jsonwebtoken
* mongodb
* mongoose
* morgan
* oauth
* socket.io

## Contributors

* [Jim Merk](https://github.com/jamesmerk)
* [Anderson Laventure](https://github.com/Camus1859)


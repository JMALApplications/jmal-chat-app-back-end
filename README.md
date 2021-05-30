# JMAL Chat App Back-End

The RESTful Service and Back-End processes that power the JMAL Chat Application - a chat-based CRM with a similar design to popular modern CRM's.

The Finished project will consist of the following:

1. A website that hosts an Admin Area
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

## API Reference

`Routes, Allowed HTTP Operations, and Paramaters`





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


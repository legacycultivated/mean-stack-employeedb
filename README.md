# MEAN-Stack-Employee-Database

## Overview

This is an Employee Database application that allows users to add, delete, and edit employees to a list as desired. The technologies used are MongoDB, Express.js, Angular.js, and Node.js. This project serves as an introduction for me to Angular.js and as well as practice in using Typescript syntax. Instructions were obtained from MongoDB's website.

The server side code written in Typescript declares our object json schema as well as connects to our database on MongoDB's server through the use of a connection string URI. This is where our RESTful API endpoints are written as well. Implemented are GET, POST, PUT, and DELETE action/endpoints which are HTTP methods that correspond with CRUD operations. Here we can make use of Mongo and Express.js for our routing needs.

The client side code was written in Angular.js. In this folder we have written the user interface that the users see and interact with. Angular recommends seperating business logic from presentation logic so we create service files that handle the communication with certain API endpoints allowing us to call these services from other components.

### Conclusion

This project was a good experience in practicing MVC (Model, View, Controller) architechture with Angular.js. It clearly seperated logic and concerns through the use of components, modules, and services. I can say this tutorial was very "hand-held" but served as a great introduction to Angular and Typescript for me and I look forward to developing more using both.

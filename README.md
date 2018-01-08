# mock-crud-service
A simple express server with basic CRUD endpoints


### Starting the server
- Install node if not already installed. This is only needed one time.
- Clone the repo and `cd` into root directory
- Install dependencies via: `npm i`
- start server via: `node server.js`
- Your application server will now be running on `http://localhost:3000`

### Endpoints

This service can be used as a sample server with basic CRUD operations. Using a tool like [Postman](https://www.getpostman.com/) make a request to following endpoints. 
#### GET 
- `http://localhost:3000/api/getUsers` : Returns all users
- `http://localhost:3000/api/getUserById/:id`: Returns users with a specified Id

#### POST
- `http://localhost:3000/api/saveUser` : 
   
   A POST request call to create a new user. You can pass in a `name` attribute in the request body.

#### PUT
- `http://localhost:3000/api/updateUser`:
   A PUT request call to update a users. You can pass `name` attibute in the request body which refers to the updated name of the users, and an `id` attribute which refer the userId being updated.

#### DELETE
- `http://localhost:3000/api/deleteUser`:
   A DELETE request call to delete a users. You can pass `id` attibute in request body which refers to the userId you want to delete.
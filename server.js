const express = require("express");
const bodyParser = require('body-parser');
const _ = require("lodash");


var users = [{
    id: "1",
    name: "Divya Bharathi"
}, {
    id: "2",
    name: "Nikhilesh Katakam"
}];

const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.listen(3000, function() {
 console.log("listening on 3000");
});


// GET
app.get("/api/getUsers", (request, response) => {
 response.send(users);
 console.log("Inside global get");
});

app.get("/api/getUserById/:id", (request, response) => {
  const {params = {}} = request;
  const {id = ""} = params;
  const user = users.find(usr=> {
      return usr.id === id;
  });
  response.send(user || {});
});


// POST
app.post("/api/saveUser", (request, response) => {
   const { body = {}} = request;
   const { name = "" } = body;
   console.log(name);
   users.push({
       name: name,
       id: _.uniqueId(`user_`)
   });
   response.send(users);
});

// PUT
app.put("/api/updateUser", (request, response) => {
 const {body = {}} = request;
 const {name = "", id=""} = body;
 for(var i =0 ;i< users.length; i++) {
     if(users[i].id === id) {
         users[i].name = name;
         break;
     }
 }
 response.send(users);
});

// Delete
app.delete("/api/trashUser", (request, response) => {
    const { body = {} } = request;
    const { id = "" } = body;
    const newUsers = [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].id !== id) {
            newUsers.push(users[i]);
        }
    }
    users = newUsers;
    response.send(users);
});
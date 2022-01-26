// load .env data into process.env
require("dotenv").config();
// Web server config
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors())
const http = require('http');
const server = http.createServer(app)
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3002'
  }
});

const morgan = require("morgan");

const cookieSession = require("cookie-session");
const mentorsRouter = require('./routes/mentors');



app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
  })
);


// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const homeRoutes = require("./routes/index");
const usersRoutes = require("./routes/users");
const studentsRoutes = require("./routes/students");



// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/", homeRoutes(db));
app.use("/api/users", usersRoutes(db));
app.use("/api/mentors", mentorsRouter(db))
app.use("/api/students", studentsRoutes(db))

let users = [];

const addNewUsers = (username, socket_id) => {
  !users.some(user => user.username === username) && users.push({username, socket_id});
}

const disconnectUser = (socket_id) => {
  users = users.filter(user => user.socket !== socket_id)
}
io.on('connection', socket => {
  socket.on("message", data=> {
   addNewUsers(data.mentor, socket.id)
    const conversation = {message: data.message, mentor: data.mentor, sender: data.sender}
    console.log("message:", conversation, "user::: ", users );
    
    io.emit("respond", data)
  });

  // socket.on('disconnect', () => {
  //   disconnectUser(socket.id)
  // })

});

io.emit


/// chat

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).


server.listen(PORT, () => {
  console.log(`final_app listening on port ${PORT}`);
});

// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`);
// });

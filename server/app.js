// load .env data into process.env
require("dotenv").config();
// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const server = require('http').createServer(app);
const io = require('socket.io')(server)
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
const { Socket } = require("socket.io");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/", homeRoutes(db));
app.use("/api/users", usersRoutes(db));

app.use("/api/mentors", mentorsRouter(db))
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

io.on('connection', () => {
 socket.on('chat-message', msg => {
   console.log("message is:", msg);
 })
});

server.listen(PORT, () => {
  console.log(`final_app is listening on port ${PORT}`);
// });
});

// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`);
// });

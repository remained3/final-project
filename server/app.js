// load .env data into process.env
require("dotenv").config();
// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const cors = require("cors");
const app = express();

// Socket.io
const http = require("http").createServer(app);
// const io = require("socket.io")(http);
const { Server } = require("socket.io");
const io = new Server(http, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

const morgan = require("morgan");
const cookieSession = require("cookie-session");
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
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
const chatRoutes = require("./routes/chat");
const mentorsRouter = require("./routes/mentors");
const studentsRouter = require("./routes/students");
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/", homeRoutes(db));
app.use("/users", usersRoutes(db));
app.use("/chat", chatRoutes(db));
app.use("/students", studentsRouter(db));
app.use("/mentors", mentorsRouter(db));

// Note: mount other resources here, using the same pattern above
// io connection
io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("message", ({ name, mentor, message, room }) => {
    const selectText =
      "SELECT * FROM users WHERE mentor = false AND users.name = $1;";
    const selectValues = [name];
    db.query(selectText, selectValues)
      .then((res) => {
        console.log(res.rows[0]);
        const student = res.rows[0].id;
        const insertText =
          "INSERT INTO questions(question, student_id, answer) VALUES ($1,$2,$3) RETURNING *";
        const insertValues = [message, student, ""];
        db.query(insertText, insertValues)
          .then((res) => {
            console.log(res.rows[0]);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));

    io.emit("new-message", { name, mentor, message });

    console.log("message", { name, message });
  });
});

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

http.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

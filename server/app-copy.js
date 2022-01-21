// ------------------ REQUIREMENTS -----------------

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var messagesRouter = require("./routes/messages");
var mentorsRouter = require("./routes/mentors");

// -------------- SERVER SETTINGS ---------------------

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// ------------------ ROUTES/ENDPOINTS ------------------
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/messages", messagesRouter);
app.use("/mentors", mentorsRouter);

module.exports = app;

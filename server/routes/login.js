const express = require("express");
const router = express.Router();
const basicAuth = require("express-basic-auth");
const auth = basicAuth({
  users: {
    "anne@example.com": "myPassword",
    "john@mayer.com": "myPassword2",
    "luka@lukam.com": "password123",
    "mikey@mikestesting.com": "myP@22w0rd",
    "may@break.com": "testing",
    "hope@fully.com": "workinghard",
    "a@name.com": "johnsmith"
  },
});

/* GET users listing. */
const loginRouter = (db) => {
  router.get("/", auth, function (req, res, next) {
    if (req.auth.user === "anne@example.com.com") {
      res.send({ id: "1", email: "anne@example.com" });
    } else if (req.auth.user === "john@mayer.com") {
      res.send({ id: "2", email: "john@mayer.com" });
    } else if (req.auth.user === "luka@lukam.com") {
      res.send({ id: "3", email: "luka@lukam.com" });
    } else if (req.auth.user === "mikey@mikestesting.com") {
      res.send({ id: "4", email: "mikey@mikestesting.com" });
    } else if (req.auth.user === "may@break.com") {
      res.send({ id: "5", email: "may@break.com" });
    } else if (req.auth.user === "hope@fully.com") {
      res.send({ id: "6", email: "hope@fully.com" });
    } else if (req.auth.user === "a@name.com") {
      res.send({ id: "7", email: "a@name.com" });
    }
  });

  return router;
};
module.exports = loginRouter;
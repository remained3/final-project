/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const user = {
  name: "Alex",
  number: 2,
};
module.exports = (db) => {
  router.get("/", (req, res) => {
    res.json(user);
  });
  return router;
};

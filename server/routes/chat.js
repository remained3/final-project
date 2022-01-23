/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(
      `SELECT  users.name, questions.question, questions.answer, users.last_active, users.bio, users.picture   
      FROM users 
       LEFT JOIN questions on users.id = questions.student_id
       ;`
    )
      .then((chat) => {
        return res.json(chat.rows);
      })
      .catch((err) => {
        console.log(err);
        res.send("please try again later");
      });
  });
  router.post("/", (req, res) => {
    db.query(
      `INSERT INTO questions (question, answer)
        VALUES ($1, $2);`
    )
      .then((chat) => {
        return res.json(chat.rows);
      })
      .catch((err) => {
        console.log(err);
        res.send("please try again later");
      });
  });
  return router;
};

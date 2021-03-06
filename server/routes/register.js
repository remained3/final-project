const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/register", (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const mentor = req.body.mentor
    db.query(
      
      `INSERT INTO users (name, email, password, mentor) VALUES (?,?,?,?)`,
      [name,email,password,mentor],
      (err,res) => {
        console.log(err)
      }
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

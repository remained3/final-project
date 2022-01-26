const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("//login", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    db.query(
      
      `SELECT * FROM users WHERE email = ? AND password =?`, [email, password],
      (err,res) => {
        if (err) {
          console.log(err)
        } if (res) {
          res.send(res)
        } else {
          res.send({message: "Incorrect email/password"})
        }
      })
    })
    return router;
};

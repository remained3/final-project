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
     `SELECT  users.name,users.email,users.last_active, institutions.institution as university,institutions.location as location,users.bio, users.picture   
      FROM 
        users 
      JOIN 
        institutions 
      ON
       users.institution_id = institutions.id
      ORDER BY users.name;`
    )
      .then((users) => {
        return res.json(users.rows);
      })
      .catch((err) => {
        console.log(err);
        res.send("please try again later");
      });
  });
  return router;
};

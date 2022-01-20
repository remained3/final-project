const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/register", async (req, res) => {

    const { name, email, password} = req.body;

    try {
        
        let queryString = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3, $4) RETURNING *`;
        let queryParams = [ name, email, password, ];

        db.query(queryString, queryParams).then(() =>{
          res.status(200).send();
        })
      } catch (error) {
        res.status(500).send();
      }
    }
  ); 

  router.post("/login", async (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;

    db.query(`SELECT * FROM users WHERE email = $1;`, [email])
    .then(async data => {
      const user = data.rows[0];      
        if (!user) {
          return res.status(400).send('User does not exist');
        } else {
          try {
            if (password !== user.password) {
              res.send(user);
            } else {
              res.send("Invalid username or password");
            }
          } catch (error) {
            res.status(500).send();
          }
        }   
      })

  });

  return router;
}
module.exports = loginRouter;
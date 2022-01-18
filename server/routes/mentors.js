var express = require('express');
var router = express.Router();

/* GET mentors listing. */
const mentorsRouter = (db) => {
  router.get('/',function(req, res, next) {
    const queryString = "SELECT * FROM users WHERE mentor = true;";
    return db
    .query(queryString)
    .query(queryString)
    .then((data) => res.json(data.rows))
    .catch((err) => console.error(err));
});
return router;
};
module.exports = mentorsRouter;
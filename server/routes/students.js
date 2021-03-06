var express = require("express");
var router = express.Router();

// GET mentors
// not using database yet
const studentsRouter = (db) => {
  router.get("/", function (req, res, next) {
    const queryString = `
    SELECT users.id,users.name, users.email, users.password,
          users.picture, users.mentor, users.institution_id,
          users.bio, users.last_active, institutions.institution
    FROM users 
    LEFT JOIN
    institutions
    ON
      users.institution_id=institutions.id
    WHERE users.mentor = false;
    `;
    return db
      .query(queryString)
      .then((data) => res.json(data.rows))
      .catch((err) => console.error(err));
  });
  return router;
};

module.exports = studentsRouter;

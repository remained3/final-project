var express = require('express');
var router = express.Router();

// GET mentors
// not using database yet
const studentsRouter = (db) => {
  router.get('/',function(req, res, next) {
    const queryString = `
    SELECT name,email,password,
      picture,bio,mentor,institution_id,
      last_active, institutions.institution as university
    FROM users 
    JOIN
      institutions
    ON
      institution_id=institutions.id
      WHERE mentor = false;
    `
    ;
    return (
          db
          .query(queryString)
          .then((data) => res.json(data.rows))
          .catch((err) => console.error(err))
    );
});
return router;
};

module.exports = studentsRouter;

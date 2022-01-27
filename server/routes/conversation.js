const express = require('express');
const router = express.Router();

// GET mentors
// not using database yet
const conversationRouter = (db) => {
  router.get('/',function(req, res, next) {
    const queryString = `
    SELECT *
    FROM 
      conversations 
    WHERE 
      mentor_id = $1 
    AND 
      student_id = $2;
    `
    ;
    return (
          db
          .query(queryString, [req.query.mentorId, req.query.studentId])
          .then((data) => res.json(data.rows))
          .catch((err) => console.error(err))
    );
});
return router;
};

module.exports = conversationRouter;

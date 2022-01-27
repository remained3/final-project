var express = require('express');
var router = express.Router();

/* GET messages listing. */
const messagesRouter = (db) => {
  router.get('/', function(req, res, next) {
  
  const queryString = `
    SELECT *
    FROM 
      messages
    WHERE 
      sender_id = $1  AND  receiver_id = $2
    OR
    sender_id = $2  AND  receiver_id = $1
    ;
    `
    return (
      db
      .query(queryString, [req.query.senderId, req.query.receiverId])
      .then((data) => res.json(data.rows))
      .catch((err) => console.error(err))
);

});
return router;

}

module.exports = messagesRouter;
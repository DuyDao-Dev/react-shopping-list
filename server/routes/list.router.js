const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.delete('/all', (req,res) => {
    const queryText = `DELETE FROM items`;

  pool.query(queryText)
    .then(dbResponse => {
      console.log(`Did we delete just one row? ${dbResponse.rowCount}`);
      res.sendStatus(200);
    })
    .catch(error => {
      console.log(`Could not delete task with id ${items}.`, error);
      res.sendStatus(500);
    });
});

module.exports = router;



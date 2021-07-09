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


router.put('/all', (req, res) => {

    let putQuery = `
    UPDATE  items
    SET "isPurchased" = '0';`;
//need to figure out how to update description.
    pool.query(putQuery)
    .then(dbResponse => {
        console.log('Updated list with PUT', dbResponse);
        res.sendStatus(202);
    })
    .catch(err => {
        console.log('There was an error updating list', err);
        res.sendStatus(500);
    })
});

module.exports = router;

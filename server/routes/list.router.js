const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.get ('/'), (req,res) => {
        const sqlText = `SELECT * FROM items ORDER BY name`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
}


module.exports = router;
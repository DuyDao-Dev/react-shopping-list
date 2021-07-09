const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// DELETE routes
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log('DELETE', id);

    if(id && id !== ""){
    const sqlText = `
        DELETE FROM "items"
        WHERE "id"=$1;
    `;
    
    pool.query(sqlText, [id])
        .then((result) => {
            console.log(`Deleted item from items table`, id);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
    } else {
        res.sendStatus(500).send('no id');
    }
})

// PUT routes
router.put('/:id', (req, res) => {
    const id = req.params.id;
    console.log('PUT', id);

    if(id && id !== ""){
    const sqlText = `
        UPDATE "items"
        SET "isPurchased" = '1'
        WHERE "id" = $1;
    `;
    
    pool.query(sqlText, [id])
        .then((result) => {
            console.log(`Updated isPurchased column in table items where id =`, id);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
    } else {
        res.sendStatus(500).send('no id');
    }
})

module.exports = router;
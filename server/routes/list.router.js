const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
//Adding new item to the shopping list
router.post('/', (req, res) =>{
    let newItem = req.body;
    let queryText = `INSERT INTO "item" ("name", "quantity", "unit", "isPurchased")
    VALUES ($1, $2, $3, $4);`;

    pool.query(queryText, [newItem.name, newItem.quantity, newItem.unit, 'false'])//isPurchase will be false default
    .then(result => {
        res.sendStatus(201);
    }).catch(err => {
        console.log(`Error adding item with query ${queryText}`, err);
        res.sendStatus(500);
    })
});



module.exports = router;
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.delete('/list/all', (req, res) => {
   console.log('')
    const itemsId = req.params.id;
    const queryText = `
    DELETE FROM items`
   
   pool.query(queryText, [itemsId]) 
}).then((response) => {
    console.log(`What is itemsID doing?, ${itemsId}`)
    res.sendStatus(200);
})
.catch(error => {
    console.log(`Did we delete all rows? ${response.rowCount} `)
    res.sendStatus(500);
});

module.exports = router;



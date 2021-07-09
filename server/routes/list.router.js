const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
//Adding new item to the shopping list
router.post('/', (req, res) =>{
    let newItem = req.body;
    let queryText = `INSERT INTO "items" ("name", "quantity", "unit", "isPurchased")
    VALUES ($1, $2, $3, $4);`;

    pool.query(queryText, [newItem.name, newItem.quantity, newItem.unit, 'false'])//isPurchase will be false default
    .then(result => {
        res.sendStatus(201);
    }).catch(err => {
        console.log(`Error adding item with query ${queryText}`, err);
        res.sendStatus(500);
    })
});
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

// GET routes
router.get ('/', (req,res) => {
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
})

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


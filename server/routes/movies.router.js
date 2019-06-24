const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//get route to get movies from database
router.get('/movies', (req, res) => {
  const queryText = 'SELECT * FROM movies';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT movies query', err);
      res.sendStatus(500);
    });
});

//get route to individual movie from database
router.get('/movie/:id', (req, res) => {
  const queryText = `SELECT * FROM movies WHERE id = {req.params.id}`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT movies query', err);
      res.sendStatus(500);
    });
});

//get route to get genres from database
router.get('/genres', (req, res) => {
    const queryText = 'SELECT * FROM genres';
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT movies query', err);
        res.sendStatus(500);
      });
  });


module.exports = router;

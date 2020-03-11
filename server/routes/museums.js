const express = require('express');
const router = express.Router();
const db = require('../models/index');

router.get('/', (req, res) => {
  db.Museum.find()
  .then(museums => res.send(museums))
  .catch(err=>res.send({ message: 'Error in getting all museums', err}));
});

router.post('/', (req, res) => {
  db.Museum.create(req.body)
  .then(museum => res.send(museum))
})

router.get('/:id', (req, res) => {
  db.Museum.findById(req.params.id)
  .then(museum => res.send(museum))
  .catch(err=>res.send({ message: 'Error in getting one museums', err}));
});

module.exports = router;
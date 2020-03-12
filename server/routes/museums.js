const express = require('express');
const router = express.Router()
const db = require('../models/index')

//Index page to deliver a list of museums
router.get('/', (req, res) => {
    db.Museum.find()
        .then(museums => {
            res.send(museums);
    }).catch(err => res.send({message: 'Error in getting all mesuems', err}))
})

//Take form data and use it to add new museum
router.post('/', (req, res) => {
    console.log(req.body)
    // Remove any key that have no value
    Object.keys(req.body).forEach(key => (req.body[key] == '') && delete req.body[key]);
    db.Museum.create(req.body)
        .then(museum => {
            res.send(museum);
    }).catch(err => res.send({message: 'Error in creating mesuem', err}))
})

//Show page for specific museum. Include list of pieces!
router.get('/:id', (req, res) => {
    db.Museum.findById(req.params.id)
        .then(museums => {
            res.send(museums);
    }).catch(err => res.send({message: 'Error in getting one mesuems', err}))
})

module.exports = router;
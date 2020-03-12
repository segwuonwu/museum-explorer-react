const express = require('express');
const router = express.Router()
const db = require('../models/index')

//Index page to deliver a list of pieces
router.get('/', (req, res) => {
    db.Piece.find()
    .populate('museum')
        .then(pieces => {
        res.send(pieces)
    //   res.render('pieces/index', { pieces: pieces });
    })
    .catch(err => {
        console.log('Error in GET /pieces route:', err);
        res.send('Error getting all pieces', err);
    });
});
  
//Take form data to add a new piece (remember to add museum and creator!)
router.post('/', (req, res) => {
    console.log(req.body);
    db.Piece.create({
        name: req.body.name,
        country: req.body.country,
        city: req.body.city,
        image: req.body.image,
        museum: req.body.museumId,
        creator: {
            name: req.body.name,
            image: req.body.creatorImage,
            birthyear: req.body.creatorBirth,
            deathyear: req.body.creatorDeath
        }
    })
    .then(result => {
        console.log('New piece successfully created');
        res.redirect('/pieces');
    })
    .catch(err => {
        console.log('Error Message', err);
        res.send('An error occured');
    });
  });
  
  //Show page for specific piece. Include all creator info!
  router.get('/:id', (req, res) => {
    db.Piece.findById(req.params.id)
        .then(pieces => {
            res.send(pieces);
    }).catch(err => res.send({message: 'Error in getting one piece', err}))
})

module.exports = router;
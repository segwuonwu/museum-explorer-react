const express = require('express');
const router = express.Router()
const db = require('../models/index')

//Index page to deliver a list of pieces
router.get('/', (req, res) => {
    db.Piece.find()
    .populate('museum')
        .then(pieces => {
        res.send(pieces)
    })
    .catch(err => {
        console.log('Error in GET /pieces route:', err);
        res.send('Error getting all pieces', err);
    });
});
  
//Take form data to add a new piece (remember to add museum and creator!)
router.post('/', (req, res) => {
    let newPiece = {
        name: req.body.pName,
        image: req.body.pImage,
        museum: req.body.museum,
        creator: {
            name: req.body.name,
            image: req.body.image,
            birthYear: req.body.birthyear,
            deathYear: req.body.deathyear
        }
    }

    Object.keys(newPiece).forEach(key => (newPiece[key] == '') && delete newPiece[key]);
    Object.keys(newPiece.creator).forEach(key => (newPiece.creator[key] == '') && delete newPiece.creator[key]);
    db.Piece.create(newPiece)
    .then(piece => {
        res.send(piece);
    })
    .catch(err => {
        console.log('Error Message', err);
        res.send({message :'An error occured', err});
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
// Require Mongoose node module
const mongoose = require('mongoose');

// TODO: Create Museum Schema name, country, city, image
const museumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'http://www.placekitten.com/400/600'
  }
})

// TODO: Use schema to create model
const Museum = mongoose.model('Museum', museumSchema);

// TODO: Export Museum Model
module.exports = Museum;
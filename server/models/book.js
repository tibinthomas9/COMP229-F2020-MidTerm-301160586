let mongoose = require('mongoose');


// create a model class
let Book = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
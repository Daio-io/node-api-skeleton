// Require mongoose
var mongoose = require('mongoose');
var sampleSchema = mongoose.Schema( {
   name: String, // String
    number: Number, // Number
    tags: [String], // Array of strings 
    boo: Boolean, //Bool
    
});

var Sample = mongoose.model('Sample', sampleSchema); // create a model using Mongoose - at this point Sample becomes like a class
module.exports = Sample; // add the Sample object to exports this can then be imported like this
// var Sample = require('./models/sample.js');
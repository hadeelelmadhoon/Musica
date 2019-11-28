const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Reviews = require('../models/reviews.model');

let SongsSchema = new Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    rating: { type: Number }
}, { collection: 'Songs' });

// Export the model
const Songs = module.exports = mongoose.model('Songs', SongsSchema);
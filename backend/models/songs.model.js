const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Reviews = require('../models/reviews.model');

let SongsSchema = new Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, default: 'N/A' },
    track: { type: String, default: 'N/A' },
    year: { type: String, default: 'N/A' },
    genre: { type: String, default: 'N/A' },
    hidden: { type: Boolean, default: false }
}, { collection: 'Songs' });

// Export the model
const Songs = module.exports = mongoose.model('Songs', SongsSchema);
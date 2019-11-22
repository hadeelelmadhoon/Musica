const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// set product schema 
let SongsSchema = new Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    views: { type: Number },
    rating: { type: Number }
}, { collection: 'Songs' });

// Export the model
const Songs = module.exports = mongoose.model('Songs', SongsSchema);
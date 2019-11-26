const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// set product schema 
let ReviewsSchema = new Schema({
    username: { type: String },
    subject: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: Number }
})
let SongsSchema = new Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    rating: { type: Number },
    reviews: { type: [ReviewsSchema] }
}, { collection: 'Songs' });

// Export the model
const Songs = module.exports = mongoose.model('Songs', SongsSchema);
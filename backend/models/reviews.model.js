const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// set product schema 
let ReviewsSchema = new Schema({
    songId: { type: String },
    username: { type: String },
    review: { type: String, required: true },
    rating: { type: Number },
    date: { type: Date }
}, { collection: 'Reviews' });

// Export the model
const Reviews = module.exports = mongoose.model('Reviews', ReviewsSchema);
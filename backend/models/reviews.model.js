const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// set product schema 
let ReviewsSchema = new Schema({
    songId: { type: String },
    username: { type: String },
    review: { type: String, required: true },
    rating: { type: Number }
}, { collection: 'Reviews' });

// Export the model
const Reviews = module.exports = mongoose.model('Reviews', ReviewsSchema);

// module.exports.getReviewsBySongId = function(songId, callback) {
//     Reviews.find({ songId: songId }, (err, reviews) => {
//         if (err)
//             console.log(err);
//         else {
//             console.log(songId)
//             console.log(reviews)
//         }
//     });
// }
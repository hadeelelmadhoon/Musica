const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// set product schema 
let PolicieSchema = new Schema({
    title: { content: String },
    content: { type: String },
    type: { type: String }
}, { collection: 'Policies' });

// Export the model
const Reviews = module.exports = mongoose.model('Policies', PolicieSchema);
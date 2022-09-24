const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// step 1. create Schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

// step 2. create model from the Schema 
const Blog = mongoose.model('Blog', blogSchema);

// step 3. export model
module.exports = Blog
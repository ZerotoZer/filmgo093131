const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commSchema = new Schema({
    movie_id: String,
    level: Number,
    username: String,
    comment_body: String,
    replies: Array,
}, {timestamps : true});

const Comm = mongoose.model('Comm', commSchema);

module.exports = Comm;
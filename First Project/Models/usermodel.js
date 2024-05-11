const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/kuchbhi');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

module.exports = mongoose.model('user', userSchema);
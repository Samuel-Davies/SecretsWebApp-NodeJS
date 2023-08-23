const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/SecretsDB");

const userSchema = new mongoose.Schema({
    email : String,
    password: String
});


module.exports = new mongoose.model('User', userSchema);
const mongoose = require('mongoose');
const encrypt  = require('mongoose-encryption');

mongoose.connect("mongodb://localhost:27017/SecretsDB");



const userSchema = new mongoose.Schema({
    email : String,
    password: String
});


userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ['password'] });

module.exports = new mongoose.model('User', userSchema);
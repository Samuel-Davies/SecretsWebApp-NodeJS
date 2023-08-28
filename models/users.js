const mongoose = require('mongoose');
const encrypt  = require('mongoose-encryption');

mongoose.connect("mongodb://localhost:27017/SecretsDB");



const userSchema = new mongoose.Schema({
    email : String,
    password: String
});

const secret = 'Thisisourlittlesecret.'; 
userSchema.plugin(encrypt, {secret: secret, encryptedFields: ['password'] });

module.exports = new mongoose.model('User', userSchema);
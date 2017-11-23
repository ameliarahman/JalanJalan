const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: String,
    password: String
})


const User = mongoose.model('users', userSchema);

module.exports = User
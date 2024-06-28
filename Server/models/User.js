const mongoose = require('mongoose');

const userSchema = new mongooseShema({
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
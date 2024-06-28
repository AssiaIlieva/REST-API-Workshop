const User = require('../Models/User');
const jwt = require('jsonwebtoken');

exports.register = async(userData) => {


    const user = await User.create(userData);

    const token = jwt.sign({
        _id: user._id,
        email: user.email
    }, 'SOMESECRETHERE')

    return {
        _id: user._id,
        email: user.email,
        token,
    }
}
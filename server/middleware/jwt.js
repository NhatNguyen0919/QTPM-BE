const jwt = require('jsonwebtoken');

const generateAccessToken = (uid) => {
    return jwt.sign({ _id: uid }, process.env.JWT_SECRET, { expiresIn: '3d' })
}

module.exports = {
    generateAccessToken
}
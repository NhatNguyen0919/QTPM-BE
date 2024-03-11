const User = require('../models/users')
const asyncHandler = require('express-async-handler')
const register = asyncHandler(async (req, res) => {
    const { name, email, phone, password } = req.body
    if (!email || !password || !name || !phone)
        return res.status(400).json({
            success: false,
            message: "Missing Input"
        })

    const response = await User.create(req.body)
    return res.status(200).json({
        success: response ? true : false,
        response
    })

})

module.exports = {
    register
}
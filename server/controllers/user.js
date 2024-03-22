const User = require('../models/users')
const asyncHandler = require('express-async-handler')
const { generateAccessToken } = require('../middleware/jwt')

const register = asyncHandler(async (req, res) => {
    const { name, email, phone, password } = req.body
    if (!email || !password || !name || !phone) {
        return res.status(400).json({
            success: false,
            message: "Missing Input"
        })
    }

    const user = await User.findOne({ email })
    if (user) {
        throw new Error('Email already exist !')
    } else {
        const response = await User.create(req.body)
        return res.status(200).json({
            success: response ? true : false,
            message: response ? 'Register success' : "Register fail"
        })
    }
})

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Missing Input"
        })
    }

    const response = await User.findOne({ email })

    if (response && await response.isCorrectPassword(password)) {
        const { password, ...userData } = response.toObject()
        const accessToken = generateAccessToken(response._id)
        return res.status(200).json({
            success: true,
            accessToken,
            userData
        })
    } else {
        throw new Error('Invalid password or email')
    }
})

module.exports = {
    register,
    login
}
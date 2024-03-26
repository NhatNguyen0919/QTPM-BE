const Restaurant = require('../models/restaurant')
const asyncHandler = require('express-async-handler')

const addNewRes = asyncHandler(async (req, res) => {
    const { name, address, phone, description, district } = req.body
    try {
        if (!name || !address || !district || !phone || !description) {
            return res.status(400).json({
                success: false,
                message: "Missing Input"
            })
        } else {
            const response = await Restaurant.create(req.body)
            return res.status(200).json({
                success: response ? true : false,
                message: response ? 'Add new success' : "Add new fail"
            })
        }
    } catch (error) {
        console.log("Error : ", error)
        return res.status(200).json({
            errorCode: -1,
            errorMessage: "error from server"
        })
    }

})

const getNewRes = asyncHandler(async (req, res) => {
    try {
        const response = await Restaurant.find()
        return res.status(200).json({
            success: response ? true : false,
            message: response
        })
    } catch (error) {
        console.log("error : ", error)
        return res.status(200).json({
            errorCode: -1,
            errorMessage: "error from server"
        })
    }

})

const getById = asyncHandler(async (req, res) => {
    try {
        let infor = await Restaurant.findById(req.query._id);
        return res.status(200).json({
            message: infor
        });
    } catch (error) {
        console.log("Error : ", error)
        return res.status(200).json({
            errorCode: -1,
            errorMessage: "error from server"
        })
    }
})

const findByName = asyncHandler(async (req, res) => {
    try {
        let resData = req.params.name
        let data = await Restaurant.findOne({ name: resData });
        if (data) {
            return res.status(200).json({
                message: data
            });
        }
        else {
            res.send({ "data": "User not found" })
        }

    } catch (error) {
        console.log("Error : ", error)
        return res.status(200).json({
            errorCode: -1,
            errorMessage: "error from server"
        })
    }
})


module.exports = {
    addNewRes,
    getNewRes,
    getById,
    findByName
}
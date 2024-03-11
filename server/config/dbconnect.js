const { default: mongoose } = require("mongoose")

const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        if (connection.connection.readyState === 1) {
            console.log("DB connection is successfully")
        } else {
            console.log("DB failed")
        }
    } catch (error) {
        console.log("error : ")
        throw new Error(error)
    }
}

module.exports = dbConnect
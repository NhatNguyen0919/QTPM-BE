const express = require('express');
require('dotenv').config()
const cors = require('cors');

const app = express()
const port = process.env.PORT || 8888
const dbConnect = require('./config/dbconnect')
const initRoutes = require('./route')

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }))
dbConnect()
initRoutes(app)

app.use('/', (req, res) => {
    res.send("server on !")
})

app.listen(port, () => {
    console.log("server is running", port)
})
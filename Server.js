const express = require("express")
const connectDB = require("./Config/connectDB")
const userRouter = require("./Routes/User")

const app = express()

require('dotenv').config()

connectDB()
app.use(express.json())

app.use('/api/auth',userRouter)

app.listen(process.env.port, console.log(`server is running on port ${process.env.port}`))
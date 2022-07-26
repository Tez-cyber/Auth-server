const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require("dotenv").config()

const app = express()

//DB connection
mongoose.connect(process.env.DATABASE, {
 //   useNewUrlParser: true,
    useUnifiedTopology: true,
  //  useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED")
}).catch(() => {
    console.log("UNABLE to connect to DB")
})
console.log("db connection failed")


//Use parsing
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors)

//Import routes
const userRoutes = require("./routes/user")

// Using route
app.use('/api', userRoutes)
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

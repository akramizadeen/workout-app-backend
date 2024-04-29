require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const cors = require('cors')

// creating the express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// cors
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) // Use this after the variable declaration

// routes
app.use('/api/workouts', workoutRoutes)

// connecting to the database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to database")
        // listen to port
        app.listen(process.env.PORT, () => {
            console.log("listening for requests on port ", process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })

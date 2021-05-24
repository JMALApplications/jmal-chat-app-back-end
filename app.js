const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')

dotenv.config();

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const conversationRoutes = require('./api/routes/conversations')
const visitorRoutes = require('./api/routes/visitors')
const userRoutes = require('./api/routes/user')

mongoose.connect(process.env.ATLAS_LOGIN, {useNewUrlParser: true, useUnifiedTopology: true})


app.use('/conversations', conversationRoutes)
app.use('/visitors', visitorRoutes)
app.use('/user', userRoutes)

app.use((req, res, next) => {
    const error = new Error("Resource Not Found")
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app
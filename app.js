const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const conversationRoutes = require('./api/routes/conversations')
const visitorRoutes = require('./api/routes/visitors')

mongoose.connect(process.env.ATLAS_LOGIN, {useNewUrlParser: true, useUnifiedTopology: true})

app.use('/conversations', conversationRoutes)
app.use('/visitors', visitorRoutes)

module.exports = app
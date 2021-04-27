const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

const conversationRoutes = require('./api/routes/conversations')
const visitorRoutes = require('./api/routes/visitors')

mongoose.connect(process.env.ATLAS_LOGIN, {useNewUrlParser: true, useUnifiedTopology: true})

app.use('/conversations', conversationRoutes)

/** Uncomment when visitors routes file has routes */
// app.use('/visitors', visitorRoutes)

module.exports = app
const express = require('express')
const app = express()

const conversationRoutes = require('./api/routes/conversations')
const visitorRoutes = require('./api/routes/visitors')

app.use('/conversations', conversationRoutes)
app.use('/visitors', visitorRoutes)

module.exports = app
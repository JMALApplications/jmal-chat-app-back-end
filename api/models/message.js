const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    visitor_id: String,
    message_id: String,
    operator_id: String,
    message: {
        type: String,
        message: String
    },
    time_sent: Number,
    sent_by: String
})

module.exports = mongoose.model('Message', messageSchema)

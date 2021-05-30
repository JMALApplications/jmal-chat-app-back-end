const mongoose = require("mongoose")

const conversationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    visitor_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    last_message: { type: String, required: true },
    last_message_time: { type: Number, required: true },
    conversation_created_date: {type: Number, required: true },
    messages: [ {
        visitor_id: { type: String, required: true },
        message_id: { type: String, required: true },
        operator_id: { type: String, required: true },
        message: {
            type: { type: String, required: true },
            message: { type: String, required: true }
        },
        time_sent: { type: Number, required: true },
        sent_by: { type: String, required: true }
    } ]
})

module.exports = mongoose.model('Conversation', conversationSchema)
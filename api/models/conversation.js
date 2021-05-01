const mongoose = require("mongoose")

const conversationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    visitor_id: mongoose.Schema.Types.ObjectId,
    visitor_online: Boolean,
    last_message: String,
    last_message_time: Number,
    conversation_created_date: Number,
    visitor_data: {
        name: String,
        ip_address: String,
        os: String,
        browser: String,
        phone: String,
        email: String,
        address: String
    },
    conversation_data: {
        messages: []
    }
})

module.exports = mongoose.model('Conversation', conversationSchema)
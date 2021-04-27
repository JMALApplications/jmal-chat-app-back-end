const mongoose = require("mongoose")

const conversationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    visitor_id: 'string',
    visitor_online: 'boolean',
    last_message: 'string',
    last_message_time: 'number',
    conversation_created_date: 'number',
    visitor_data: {
        name: 'number',
        ip_address: 'string',
        os: 'string',
        browser: 'string',
        phone: 'string',
        address: 'string'
    },
    conversation_data: {
        messages: []
    }
})

module.exports = mongoose.model('Conversation', conversationSchema)
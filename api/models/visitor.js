const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    visitor_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    visitor_online: { type: Boolean, required: true},
    visitor_data: {
        name: { type: String, required: true },
        ip_address: { type: String, required: true },
        os: { type: String, required: true },
        browser: { type: String, required: true },
        phone: String,
        email: String,
        address: String
    }
})

module.exports = mongoose.model('Visitor', visitorSchema)
const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    visitor_id: mongoose.Schema.Types.ObjectId,
    visitor_online: Boolean,
    visitor_data: {
        name: String,
        ip_address: String,
        os: String,
        browser: String,
        phone: String,
        email: String,
        address: String
    }
})

module.exports = mongoose.model('Visitor', visitorSchema)
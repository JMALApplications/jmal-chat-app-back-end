const mongoose = require('mongoose')
const { request } = require('../../app')
const Conversation = require('../models/conversation')

exports.conversations_get_all = (req, res, next) => {
    res.send(req.params)
}

exports.conversations_create_conversation = (req, res, next) => {
    const id = mongoose.Types.ObjectId()
    const conversation = new Conversation({
        _id: id,
        visitor_id: id,
        visitor_online: req.body.visitor_online,
        last_message: req.body.last_message,
        last_message_time: req.body.last_message_time,
        conversation_created_date: req.body.conversation_created_date,
        visitor_data: {
            name: req.body.visitor_data.name,
            ip_address: req.body.visitor_data.ip_address,
            os: req.body.visitor_data.os,
            browser: req.body.visitor_data.browser,
            phone: req.body.visitor_data.phone,
            email: req.body.visitor_data.email,
            address: req.body.visitor_data.address
        },
        conversation_data: {
            messages: [req.body.conversation_data.messages]
        }
    })
    conversation
    .save()
    .then(result => {
        console.log(result)
        res.status(201).json(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
}

exports.conversations_update_conversation = (req, res, next) => {
    res.send(req.params)
}
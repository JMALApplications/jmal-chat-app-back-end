const mongoose = require('mongoose')
// const { request } = require('../../app')
const Conversation = require('../models/conversation')

exports.conversations_get_all = (req, res, next) => {
    const conversation = Conversation.find()
    conversation
    .then(result => {
        console.log(result)
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
}

// Get a conversation
exports.conversations_get_conversation = (req, res, next) => {
    // Find a conversation matching the requested visitor id
    const conversation = Conversation.find({
        visitor_id: req.params.visitor_id
    })
    conversation
    .then(result => {
        console.log(result)
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(error)
        res.status(500).json({
            error: err
        })
    })
}

// Create a new conversation
exports.conversations_create_conversation = (req, res, next) => {
    // Generate a mongoose ObjectId
    const id = mongoose.Types.ObjectId()
    // Create a new instance of the Conversation model
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
        messages: [req.body.message]
    })
    conversation
    // Save the created document
    .save()
    // Output the response
    .then(result => {
        console.log(result)
        res.status(201).json(result)
    })
    // Catch any errors that occur if the request fails
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
}

exports.conversations_update_conversation = (req, res, next) => {
    const conversation = Conversation.updateOne(
        { _id: req.params.visitor_id},
        { $push : 
            { 
                messages: {
                    visitor_id: req.params.visitor_id,
                    message_id: req.body.message_id,
                    operator_id: req.body.message.type,
                    message: {
                        type: req.body.message.type,
                        message: req.body.message.message
                    },
                    time_sent: req.body.time_sent,
                    sent_by: req.body.sent_by
                } 
            } 
        }
    )
    conversation
    .then(result => {
        console.log(result)
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
}

exports.conversations_delete_conversation = (req, res, next) => {
    const conversation = Conversation.deleteOne({
        visitor_id: req.body.visitor_id
    })
    conversation
    .then(result => {
        console.log(result)
        res.status(200).json({
            message: "Conversation with visitor_id " + req.body.visitor_id + " successfully removed." 
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
}
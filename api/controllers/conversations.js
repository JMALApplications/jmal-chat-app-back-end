const mongoose = require('mongoose')
const Conversation = require('../models/conversation')

exports.conversations_get_all = (req, res, next) => {
    res.send(req.params)
}

exports.conversations_create_conversation = (req, res, next) => {
    res.send(req.params)
}

exports.conversations_update_conversation = (req, res, next) => {
    res.send(req.params)
}
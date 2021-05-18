const mongoose = require('mongoose')
const Visitor = require('../models/visitor')

exports.visitors_get_all = (req, res, next) => {
    const visitor = Visitor.find()
    visitor
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

exports.visitors_get_visitor = (req, res, next) => {
    const visitor = Visitor.find({
        visitor_id: req.params.visitor_id
    })
    visitor
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
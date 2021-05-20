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

exports.visitors_create_visitor = (req, res, next) => {
    const id = mongoose.Types.ObjectId()
    const visitor = new Visitor({
        _id: id,
        visitor_id: id,
        visitor_online: req.body.visitor_online,
        visitor_data: {
            name: req.body.name,
            ip_address: req.body.ip_address,
            os: req.body.os,
            browser: req.body.browser,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address
        }
    })
    visitor
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

exports.visitors_update_visitor_online = (req, res, next) => {
    const visitor = Visitor.updateOne(
        { _id: req.params.visitor_id},
        { visitor_online: req.body.visitor_online }
    )
    visitor
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
const mongoose = require('mongoose')
const Visitor = require('../models/visitor')

exports.visitors_get_all = (req, res, next) => {
    const visitor = Visitor.find()
    visitor
    .select('visitor_id visitor_online visitor_data')
    .then(docs => {
        if (docs) {
            const response = {
                count: docs.length,
                visitors: docs
            }
            res.status(200).json(response)    
        } else {
            res.status(404).json({message: "No Visitors found."})
        }
    })
    .catch(err => {
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
    .select('visitor_id visitor_online visitor_data')
    .then(doc => {
        if (doc) {
            const response = {
                visitor: doc
            }
            res.status(200).json(response)
        } else {
            res.status(404).json({message: "Visitor with requested ID not found."})
        }
    })
    .catch(err => {
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
            name: req.body.visitor_data.name,
            ip_address: req.body.visitor_data.ip_address,
            os: req.body.visitor_data.os,
            browser: req.body.visitor_data.browser,
            phone: req.body.visitor_data.phone,
            email: req.body.visitor_data.email,
            address: req.body.visitor_data.address
        }
    })
    visitor
    .save()
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
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
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })

}

exports.visitors_update_visitor_name = (req, res, next) => {
    const visitor = Visitor.updateOne(
        { _id: req.params.visitor_id },
        { $set: { 'visitor_data.name' : req.body.visitor_data.name } }
    )
    visitor
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
}

exports.visitors_update_visitor_browser = (req, res, next) => {
    const visitor = Visitor.updateOne(
        { _id: req.params.visitor_id },
        { $set: { 'visitor_data.browser' : req.body.visitor_data.browser } }
    )
    visitor
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
}

exports.visitors_update_visitor_phone = (req, res, next) => {
    const visitor = Visitor.updateOne(
        { _id: req.params.visitor_id },
        { $set : { 'visitor_data.phone' : req.body.visitor_data.phone } }
    )
    visitor
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
}

exports.visitors_update_visitor_email = (req, res, next) => {
    const visitor = Visitor.updateOne(
        { _id: req.params.visitor_id },
        { $set : { 'visitor_data.email' : req.body.visitor_data.email } }
    )
    visitor
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
}



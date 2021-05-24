const mongoose = require('mongoose')
const User = require('../models/user')
const bcrypt = require('bcrypt')

exports.user_signup = (req, res, next) => {
    User.find({
        email: req.body.email
    })
    .then(user => {
        if (user.length >= 1) {
            return res.status(409).json({
                message: 'Email already exists.'
            })
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    })
                } else {
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        email: req.body.email,
                        password: hash
                    })
                    user
                    .save()
                    .then(result => {
                        res.status(201).json({message: "User successfully created."})
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: err
                        })
                    })
                }
            })
        }
    })
}

exports.user_delete_user = (req, res, next) => {
    const user = User.deleteOne({
        _id: req.params.id
    })
    user
    .then(result => {
        res.status(200).json({
            message: "User with email " + req.params.id + " successfully removed." 
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
}

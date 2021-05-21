const express = require('express')
const router = express.Router()
const UserControllers = require('../controllers/user')

router.route('/signup').post(UserControllers.user_signup)


module.exports = router;
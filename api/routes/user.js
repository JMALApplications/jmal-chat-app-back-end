const express = require('express')
const router = express.Router()
const UserControllers = require('../controllers/user')

router.route('/signup').post(UserControllers.user_signup)

router.route('/:id').delete(UserControllers.user_delete_user)


module.exports = router;
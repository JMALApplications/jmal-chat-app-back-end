const express = require('express')
const router = express.Router()
const UserControllers = require('../controllers/user')

router.route('/signup').post(UserControllers.user_signup)

router.post('/login', UserControllers.user_sign_in)

router.route('/:id').delete(UserControllers.user_delete_user)


module.exports = router;
const express = require('express')
const router = express.Router()
const UserControllers = require('../controllers/user')
const apiAuth = require('../middleware/api-auth')

router.post('/signup', UserControllers.user_signup)

router.post('/login', UserControllers.user_sign_in)

router.delete('/:id', UserControllers.user_delete_user)


module.exports = router;
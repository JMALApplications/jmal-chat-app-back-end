const express = require('express')
const router = express.Router()
const VisitorsController = require('../controllers/visitors')
const apiAuth = require('../middleware/api-auth')

router.route('/')
.get(apiAuth, VisitorsController.visitors_get_all)
.post(apiAuth, VisitorsController.visitors_create_visitor)

router.get('/:visitor_id', apiAuth, VisitorsController.visitors_get_visitor)

router.patch('/:visitor_id/VisitorOnline', apiAuth, VisitorsController.visitors_update_visitor_online)

router.patch('/:visitor_id/VisitorName', apiAuth, VisitorsController.visitors_update_visitor_name)

router.patch('/:visitor_id/VisitorBrowser', apiAuth, VisitorsController.visitors_update_visitor_browser)

router.patch('/:visitor_id/VisitorPhone', apiAuth, VisitorsController.visitors_update_visitor_phone)

router.patch('/:visitor_id/VisitorEmail', apiAuth, VisitorsController.visitors_update_visitor_email)

module.exports = router
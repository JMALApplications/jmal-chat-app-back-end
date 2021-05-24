const express = require('express')
const router = express.Router()
const VisitorsController = require('../controllers/visitors')

router.route('/')
.get(VisitorsController.visitors_get_all)
.post(VisitorsController.visitors_create_visitor)

router.get('/:visitor_id', VisitorsController.visitors_get_visitor)

router.patch('/:visitor_id/VisitorOnline', VisitorsController.visitors_update_visitor_online)

router.patch('/:visitor_id/VisitorName', VisitorsController.visitors_update_visitor_name)

router.patch('/:visitor_id/VisitorBrowser', VisitorsController.visitors_update_visitor_browser)

router.patch('/:visitor_id/VisitorPhone', VisitorsController.visitors_update_visitor_phone)

router.patch('/:visitor_id/VisitorEmail', VisitorsController.visitors_update_visitor_email)

module.exports = router
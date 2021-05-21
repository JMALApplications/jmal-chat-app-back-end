const express = require('express')
const router = express.Router()
const VisitorsController = require('../controllers/visitors')

router.route('/')
.get(VisitorsController.visitors_get_all)
.post(VisitorsController.visitors_create_visitor)

router.route('/:visitor_id').get(VisitorsController.visitors_get_visitor)

router.route('/:id/VisitorOnline')
.patch(VisitorsController.visitors_update_visitor_online)

module.exports = router
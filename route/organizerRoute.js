const express = require('express')
const router = express.Router()
const organizerController = require('../controller/organizerController')

router.get('/', organizerController.getDashboard)
router.get('/dashboard/register/list', organizerController.getRegistrationList)
router.post('/post/event', organizerController.postEvent)

module.exports = router
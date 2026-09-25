const express = require('express')
const router = express.Router()
const eventController = require('../controller/eventController')
const { ensureAuthenticated } = require('../middleware/ensureAuth')

router.get('/', eventController.getFeed)
router.get('/events/history', ensureAuthenticated,  eventController.myEvent)
router.get('/detail/:id', ensureAuthenticated,  eventController.getDetail)
router.post('/detail/register', ensureAuthenticated,  eventController.eventRegistration)
router.delete('/register/cancel/:id', ensureAuthenticated,  eventController.cancelEvent)

module.exports = router  
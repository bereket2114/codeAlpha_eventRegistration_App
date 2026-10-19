const express = require('express')
const router = express.Router()
const organizerController = require('../controller/organizerController')
const upload = require('../middleware/multer')

router.get('/', organizerController.getDashboard)
router.get('/dashboard/register/list', organizerController.getRegistrationList)
router.post('/post/event', upload.single('event_image') ,organizerController.postEvent)

module.exports = router
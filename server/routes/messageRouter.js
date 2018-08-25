const express = require('express')
const router = express.Router()
const { list, show, create } = require('../controllers/messageController')

router.get('/messages', list)
router.get('/messages/:id', show)
router.post('/messages', create)

module.exports = router
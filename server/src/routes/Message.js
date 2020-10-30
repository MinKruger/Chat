const express = require('express')
const router = new express.Router()

const auth = require('../middlewares/auth')

const MessageController = require('../controllers/MessageController')

//with login
router.get('/', auth, MessageController.get)
router.get('/user/:id', auth, MessageController.getOne)
router.post('/message', auth, MessageController.post)
router.put('/:id', auth, MessageController.put)
router.delete('/message/:id', auth, MessageController.delete)

//without login
router.get('/anonymous', MessageController.get)
router.post('/anonymous/message', MessageController.postA)

module.exports = router

const express = require('express')
const router = new express.Router()

const auth = require('./middlewares/auth')

const userRoutes = require('./routes/User')
const messageRoutes = require('./routes/Message')

router.use('/user', userRoutes)
router.use('/message', messageRoutes)

module.exports = router

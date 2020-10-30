const express = require('express')
const router = new express.Router()

const auth = require('../middlewares/auth')

const UserController = require('../controllers/UserController')

router.post('/login', UserController.login)
router.post('/registrar', UserController.post)
router.get('/', UserController.get)
router.get('/perfil', auth, UserController.getPerfil)
router.get('/:login', auth, UserController.getbyid)
router.put('/update', auth, UserController.put)
// router.delete('/delete', auth, UserController.delete)

module.exports = router

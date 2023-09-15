const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController.js')
const authMiddleware = require('../middleware/authMiddleware.js')
// register
router.post('/registration', userController.register)
//
router.put('/registration/stage2', authMiddleware,userController.updateOne)
//
router.put('/registration/stage3', authMiddleware,userController.updateTwo)
//login
router.post('/login', userController.login)
// get me
router.get('/me', authMiddleware, userController.getMe)


module.exports = router
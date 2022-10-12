const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/users')
const isLoggedIn = require('../config/auth')

//localhost:3000/users
router.get('/users', userCtrl.index)

//localhost:3000/users/new
router.get('/users/:id', isLoggedIn, userCtrl.show)

//localhost:3000/users/:id/dream
router.post('/users/:id/dream', isLoggedIn, userCtrl.addDreamCar)

module.exports = router
const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/users')

//localhost:3000/users
router.get('/users', userCtrl.index)

//localhost:3000/users/:id
router.get('/users/:id', userCtrl.show)

//localhost:3000/users/:id/dream
router.post('/users/:id/dream', userCtrl.addDreamCar)

module.exports = router
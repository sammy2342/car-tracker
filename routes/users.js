const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/users')

//localhost:3000/users
router.get('/users', userCtrl.index)

module.exports = router
const express = require('express')
const router = express.Router()
const isLoggedIn = require('../config/auth')

const reviewsCtrl = require('../controllers/reviews')

//localhost3000:/cars/;id/reviews
router.post('/cars/:id/reviews', isLoggedIn, reviewsCtrl.create)

//localhost3000:/reviews/:id 
router.delete('/reviews/:id', isLoggedIn, reviewsCtrl.delete)

module.exports = router
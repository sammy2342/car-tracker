const express = require('express')
const router = express.Router()

const reviewsCtrl = require('../controllers/reviews')

//localhost3000:/cars/;id/reviews
router.post('/cars/:id/reviews', reviewsCtrl.create)

module.exports = router
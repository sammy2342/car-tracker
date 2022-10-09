var express = require('express');
var router = express.Router();
const carsCtrl = require('../controllers/cars')


/* GET users listing. */
// localhost:3000/cars/new
router.get('/new', carsCtrl.new)

module.exports = router;

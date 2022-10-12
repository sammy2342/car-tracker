var express = require('express');
var router = express.Router();
const carsCtrl = require('../controllers/cars')
const isLoggedIn = require('../config/auth')


/* GET users listing. */
// localhost:3000/cars/new
router.get('/new', isLoggedIn, carsCtrl.new)
//localhost:3000/cars
router.post('/', isLoggedIn, carsCtrl.create)
//localhost:3000/cars
router.get('/', carsCtrl.index)
// localhost:3000/cars/:id
router.get('/:id', carsCtrl.show)
// localhost:3000/cars/:id
router.delete('/:id', isLoggedIn, carsCtrl.delete)
// localhost:3000/cars/:id/edit
router.get('/:id/edit', isLoggedIn, carsCtrl.edit)
// localhost:3000/cars/:id
router.put('/:id', isLoggedIn, carsCtrl.update)

module.exports = router;

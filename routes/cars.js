var express = require('express');
var router = express.Router();
const carsCtrl = require('../controllers/cars')


/* GET users listing. */
// localhost:3000/cars/new
router.get('/new', carsCtrl.new)
//localhost:3000/cars
router.post('/', carsCtrl.create)
//localhost:3000/cars
router.get('/', carsCtrl.index)
// localhost:3000/cars/:id
router.get('/:id', carsCtrl.show)
// localhost:3000/cars/:id
router.delete('/:id', carsCtrl.delete)
// localhost:3000/cars/:id/edit
router.get('/:id/edit', carsCtrl.edit)
// localhost:3000/cars/:id
router.put('/:id', carsCtrl.update)

module.exports = router;

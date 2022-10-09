const Car = require('../models/car')

module.exports = { 
    new: newCar
}

function newCar(req, res) { 
    res.render('cars/new')
}
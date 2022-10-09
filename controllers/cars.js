
const car = require('../models/car')
const Car = require('../models/car')

module.exports = { 
    new: newCar,
    create, 
    index,
    show, 
    delete: deleteCar
}

function newCar(req, res) { 
    res.render('cars/new')
}

function create(req, res) {
    // req.body = the add car form so it will be the year the name the model etc... 
    // we want to create a car 
    //then we want to save it in the database
    const car = new Car(req.body)
    car.save( function(err) {
        if(err) console.log(err)
        //we should change this so it will go to the index make sure to chnage it later
        res.redirect('/cars/new')
    })
}

function index(req, res) { 
    Car.find({} ,function(err, cars) {
        res.render('cars/index', {
            cars: cars
        })
    })
}

function show(req, res) { 
    Car.findById(req.params.id, function(err, car) {
        res.render('cars/show', {
            car: car
        })
    })
    
}

function deleteCar(req, res) { 
    Car.findByIdAndDelete(req.params.id, function(err, car){
        res.redirect('/cars')
    })
}
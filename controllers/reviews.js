const Car = require('../models/car')


module.exports = { 
    create
}

function create(req, res) { 
    Car.findById(req.params.id, function(err, car) { 
        req.body.worth = !!req.body.worth
        car.reviews.push(req.body)
        car.save(function(err) {
            res.redirect(`/cars/${car._id}`)
        })
    })
}
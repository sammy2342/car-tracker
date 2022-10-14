
const Car = require('../models/car')


module.exports = { 
    create, 
    delete: deleteCarReview
}

function create(req, res) { 
    Car.findById(req.params.id, function(err, car) { 
        req.body.worth = !!req.body.worth
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar
        console.log(req.body.userAvatar, 'this is a console.log')
        car.reviews.push(req.body)
        car.save(function(err) {
            res.redirect(`/cars/${car._id}`)
        })
    })
}


function deleteCarReview(req, res, next) {
    Car.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id}).then(function(car) {
      car.reviews.remove(req.params.id);
      car.save().then(function() {
        res.redirect(`/cars/${car._id}`);
      }).catch(function(err) {
        return next(err);
      });
    });
  }
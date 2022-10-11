const User = require('../models/user')


module.exports = { 
    index, 
    show,
    addDreamCar
}

function index(req, res) { 
    User.find({}, function(err, users) { 
        res.render('users/index',{ 
            users: users
        })
        // console.log(users, 'this is a console.log for users')
    })
}

function show(req, res) { 
    // console.log(req.params.id)
    User.findById(req.params.id, function(err, user) { 
        // const isThisYourAcc = car._id.equals(req.user.users._id)
        // console.log(isThisYourAcc, 'this is a console.log')
        res.render('users/show', { 
            user: user
        })
        console.log(user, 'this is a console.log for user')
        
    })
}

function addDreamCar(req, res) { 
    // console.log(req.body)
    User.findById(req.params.id, function(err, user){ 
        user.cars.push(req.body.name)
        console.log(req.body.name)
        console.log(user.cars, 'this is a console')
        user.save({}, function(err, user) {
            res.redirect(`/users/${req.params.id}`)
        })
        
    })
}
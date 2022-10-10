const User = require('../models/user')
const Dream = require('../models/dream')
const { create } = require('../models/user')

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
    })
}

function show(req, res) { 
    User.findById(req.params.id, function(err, car) { 
        res.render('users/show', {
            car: car
        })
    })
    
}

function addDreamCar(req, res) { 
    create
}
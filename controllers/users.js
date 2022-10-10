const User = require('../models/user')


module.exports = { 
    index, 
    show,
    // create
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

// function create(req, res) { 
//     console.log(req.body)
// }
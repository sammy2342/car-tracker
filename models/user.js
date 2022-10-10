const mongoose = require('mongoose')

const dreamSchema = require('../models/dream')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    googleId: {
        type: String, 
        required: true
    },
    email: String, 
    avatar: String,
    // cars: [dreamSchema],
}, { 
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)


const mongoose = require('mongoose')


const Schema = mongoose.Schema

const dreamSchema = new Schema({ 
    name: String, 
    model: String, 
    year: Number,
    price: Number,
}, { 
    timestamps: true
})


const userSchema = new Schema({
    name: String,
    googleId: {
        type: String, 
        required: true
    },
    email: String, 
    avatar: String,
    cars: [],
}, { 
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)


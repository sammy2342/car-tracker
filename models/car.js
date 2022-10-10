const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: String, 
    worth: {type: Boolean, default: false}, 
}, {
    timestamps: true
})

const carSchema = new Schema({
    name: String,
    model: String, 
    year: Number, 
    price: Number, 
    mileage: Number, 
    reviews: [reviewSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Car', carSchema)
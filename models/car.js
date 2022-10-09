const mongoose = require('mongoose')

const Schema = mongoose.Schema

const carSchema = new Schema({
    name: String,
    model: String, 
    year: Date, 
    price: Number, 
    mileage: Number, 
    // reviews: [reviewSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Car', carSchema)
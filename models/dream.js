const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const dreamSchema = new Schema({ 
    name: String, 
    model: String, 
    year: Number
}, { 
    timestamps: true
})

module.exports = mongoose.model('Dream', dreamSchema)
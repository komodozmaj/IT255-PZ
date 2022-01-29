const mongoose = require("mongoose")

const carSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    miles_per_gallon: {type: Number, required: true},
    cylinders: {type: Number, required: true},
    displacement: {type: Number, required: true},
    horsepower: {type: Number, required: true},
    weight_in_lbs: {type: Number, required: true},
    acceleration: {type: Number, required: true},
    year: {type: String, required: true},
    origin: {type: String, required: true}
})

module.exports = mongoose.model("car", carSchema)
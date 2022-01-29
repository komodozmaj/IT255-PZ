const express = require("express")
const router = express.Router()

const Car = require("../models/car")

router.get("/all", (req, res, next) => {
    Car.find({}, (err, result) => {
        if (err) {
            return res.json({
                message: "Something went wrong."
            })
        } else {
            if (result) {
                return res.json({
                    cars: result
                })
            }
        }
    })
})

module.exports = router
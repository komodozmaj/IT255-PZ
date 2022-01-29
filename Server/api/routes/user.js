const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const User = require("../models/user")

router.post("/login", (req, res, next) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length >= 1) {
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (result) {
                        return res.status(200).json({
                            message: "Login successfull!",
                            user: {
                                email: user[0].email,
                                car_list: user[0].car_list,
                            }
                        })
                    } else {
                        return res.json({
                            message: "Password incorrect!"
                        })
                    }
                })
            } else {
                return res.json({
                    message: "Email not found!"
                })
            }
        })
})

router.put("/update_car_list", (req, res, next) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length >= 1) {
                User.updateOne({email: req.body.email}, {car_list: req.body.car_list}).then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })

                return res.json({
                    message: "Update successfull!"
                })
            } 
            return res.json({
                message: "Update failed!"
            })
        })
})

router.post("/register", (req, res, next) => {

    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.json({
                    message: "Email already exists!"
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash,
                            car_list: req.body.car_list,
                        })
                        
                        user.save()
                            .then(result => {
                                console.log(result)
                                res.json({
                                    message: "Successfully registered!"
                                })
                            })
                            .catch(error => {
                                console.log(error)
                                res.status(500).json({
                                    error: error
                                })
                            })
                    }
                })
            }
        })
})

module.exports = router
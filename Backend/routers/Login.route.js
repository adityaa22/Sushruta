const router = require('express').Router()
const User = require('../models/userModel')
const Doctor = require('../models/doctorModel')
const admindata = require('../models/adminModel')

router.route('/').post((req, res) => {
    const { email, password } = req.body
    admindata.findOne({ email: email }, (err, admin) => {
        if (err)
            res.send(err);
        if (admin) {
            if (password === admin.password) {
                var object = {
                    admin,
                    message: "Logged in successfully"
                }
                res.json(object)
            } else {
                res.send({
                    message: "Invalid Password"
                })
            }
        }
        else {
    
            User.findOne({ email: email }, (err, user) => {
                if (err)
                    res.send(err);
        
                if (user) {

                    if (password === user.password) {
                        var object = {
                            user,
                            message: "Logged in successfully"
                        }
                        res.json(object)
                    } else {
                        res.send({
                            message: "Invalid Password"
                        })
                    }
                }
                else {
            
                    Doctor.findOne({ email: email }, (err, doctor) => {
                        if (err)
                            res.send(err);
                        if (doctor) {
                            if (password === doctor.password) {
                                var object = {
                                    doctor,
                                    message: "Logged in successfully"
                                }
                                res.json(object)
                            } else {
                                res.send({
                                    message: "Invalid Password"
                                })
                            }
                        } else {
                            res.send({ message: "User not Registered" })
                        }
                    })
                }
            })
        }
    })
})

module.exports= router
const router = require('express').Router()
const User = require('../models/userModel')
const Doctor = require('../models/doctorModel')


router.route('/').post((req, res) => {
    const { name, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (err)
            res.send(err);
        if (user) {
            res.send({
                message: "User already Registered"
            })
        }
        else {
            Doctor.findOne({ email: email }, (err, doctor) => {
                if (err)
                    res.send(err)
                if (doctor) {
                    res.send({
                        message : "Email already Registered as a Doctor. Please use a different email"
                    })
                } else {
                    const user = new User({
                        name,
                        email,
                        password
                    })
                    user.save(err => {
                        if (err) res.send(err)
                        else {
                            res.send({ message: "sucessfully Registered" })
                        }
                    })
                }
            })
           
        }
    })
   
})

module.exports= router
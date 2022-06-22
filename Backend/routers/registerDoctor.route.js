const router = require('express').Router()
const User = require('../models/userModel')
const Doctor = require('../models/doctorModel')

router.route('/').post((req, res) => {

    const { fname , lname, email , password ,  medicalSchool, medicalID, specialization, city} = req.body
    User.findOne({ email: email }, (err, user) => {
        if (err)
            res.send(err);
        if (user) {
            res.send({
                message: "Email already Registered . Use a Different email"
            })
        }
        else {
            Doctor.findOne({ email: email }, (err, doctor) => {
                if (err)
                    res.send(err)
                if (doctor) {
                    res.send({
                        message : "Already Registered as Doctor. Please use a different email"
                    })
                } else {
                    const doctor = new Doctor({
                        fname,
                        lname,
                        email,
                        password,
                        medicalSchool,
                        medicalID,
                        specialization,
                        city,
                        status:"",
                    })
                    doctor.save(err => {
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
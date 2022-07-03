const router = require('express').Router()
const Doctor = require('../models/doctorModel')

router.route('/').post((req, res) => {
    const id = req.body.doctorID
    const username = req.body.userName
    const useremail = req.body.userEmail
    const description = req.body.description
    const date = req.body.value
    // console.log(id)
    // console.log(username)
    // console.log(useremail)
    // console.log(description)
    // console.log(date)
    var update = { name: username, email: useremail, description: description, date: date }
    
    Doctor.findOneAndUpdate({ _id: id }, { $push: { appointmentRequest: update } },{ new:true }).
        then(result => {
            res.send({
                message: "Request Sent!! Please wait for response from your Doctor"
            })
            // res.json(result)
        }).
        catch(err=>res.json(err))
})

module.exports = router
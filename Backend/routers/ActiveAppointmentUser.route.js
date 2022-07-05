const router = require('express').Router()
const User = require('../models/userModel')
router.route('/').post((req, res) => {
    // console.log(req.body)
    const doctorName = req.body.doctor.fname + " " + req.body.doctor.lname
    const remarks = req.body.remarks
    const useremail = req.body.useremail
    const link = req.body.link
    const date = req.body.date
    const time = req.body.time
    const update = { doctorName, remarks, link, date, time }
    User.findOneAndUpdate({ email: useremail }, { $push: { activeAppointment: update } }, { new: true }).
        then(console.log("success")).
        catch(err=>console.log(err))
})

module.exports = router
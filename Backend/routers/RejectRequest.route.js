const router = require('express').Router()
const Doctor = require('../models/doctorModel')
const axios = require("axios")

router.route('/').post((req, res) => {
    // console.log(req.body)
    const useremail = req.body.dbSearchobj.useremail
    const doctorID = req.body.dbSearchobj.doctorID
    const message = req.body.RejectionMessage

    const update = {$pull : {appointmentRequest:{email: useremail}}}
    Doctor.findOneAndUpdate({_id:doctorID},update,{ new:true }).
        then(async (doctor) => {
            const postobj = {
                doctor,
                message
            }
            console.log("success")
            // await axios.post("http://localhost:9002/notification-user", postobj).
            //     then(console.log("success")).
            //     catch(err => console.log(err))
        }).
        catch(err=>res.json(err))
})

module.exports = router
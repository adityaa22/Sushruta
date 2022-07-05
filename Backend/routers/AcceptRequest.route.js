const router = require('express').Router()
const Doctor = require('../models/doctorModel')
const axios = require("axios")

router.route('/').post((req, res) => {
    // console.log(req.body)
    const useremail = req.body.dbSearchobj.useremail
    const doctorID = req.body.dbSearchobj.doctorID
    const remarks = req.body.doctorRemarkobj.remarks
    const link = req.body.doctorRemarkobj.link
    const date = req.body.doctorRemarkobj.date
    const time = req.body.doctorRemarkobj.time
    
    const update = {$pull : {appointmentRequest:{email: useremail}}}
    Doctor.findOneAndUpdate({_id:doctorID},update,{ new:true }).
        then(async (doctor) => {
            const postobj = {
                doctor,
                useremail,
                remarks,
                link,
                date,
                time
            }
            await axios.post("http://localhost:9002/active-appointment-user", postobj).
                then(console.log("success")).
                catch(err => console.log(err))
        }).
        catch(err=>res.json(err))
})

module.exports = router
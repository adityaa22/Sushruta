const router = require('express').Router()
const Doctor = require('../models/doctorModel')

router.route('/').post((req, res) => {
    const filter = { _id: req.body.id }
    const update = {status : "Verified"}
    // console.log(filter)
    Doctor.findOneAndUpdate(filter,update,{ new:true }).
        then(result => {
            res.send({
                message:"Doctor Verified"
            })
            // res.json(result)
        }).
        catch(err=>res.json(err))
})

module.exports = router
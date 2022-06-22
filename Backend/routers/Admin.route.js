const router = require('express').Router()
const Doctor = require('../models/doctorModel')

router.route('/').post((req, res) => {
    const status = req.body.key
    Doctor.find({ status: status }).
        then(result => {
            res.json(result)
        }).
        catch(err=>res.json(err))
})

module.exports = router
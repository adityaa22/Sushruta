const router = require('express').Router()
const Doctor = require('../models/doctorModel')

router.route('/').post((req, res) => {
    const id = req.body.key
    // console.log(id)
    Doctor.findOne({ _id: id }).
        then(result => {
            res.json(result)
        }).
        catch(err=>res.json(err))
})

module.exports = router
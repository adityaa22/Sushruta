const router = require('express').Router()
const User = require('../models/userModel')

router.route('/').post((req, res) => {
    const id = req.body.key
    // console.log(id)
    User.findOne({ _id: id }).
        then(result => {
            res.json(result)
        }).
        catch(err=>res.json(err))
})

module.exports = router
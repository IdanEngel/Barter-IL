const express = require('express')
const router = express.Router()
const User = require('../Models/User')
// router.get('/', (req, res)=>{
//     res.send('hello')
// })

//get all users
router.get('/users', (req, res) => {
    User.find({}, function (err, user) {
        res.send(user)
    });
})


module.exports = router

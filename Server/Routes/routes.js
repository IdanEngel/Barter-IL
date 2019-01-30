const express = require('express')
const router = express.Router()
const User = require('../Models/User')
const matchesAndLikes = require('../Scripts/Logic')


//get all users
router.get('/users', (req, res) => {
    User.find({}, function (err, user) {
        res.send(user)
    });
})

router.post('/newuser', async function (req, res) {
    let newUser = await new User(req.body)
    newUser.save()
    res.send('new user saved to DB')
})

//sending the user details to the client
router.get('/profile/:userName', (req, res) => {
    User.findOne({ username: req.params.userName }, function (error, user) {
        res.send(user)
    })
})


    
    
    
    module.exports = router

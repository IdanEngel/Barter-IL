const express = require('express')
const router = express.Router()
const User = require('../Models/User')


//get all users
router.get('/users', (req, res) => {
    User.find({}, function (err, user) {
        res.send(user)
    });
})

router.post('/newuser', async function(req, res){
    let newUser = await new User (req.body)
    newUser.save()
    res.send('new user saved to DB')
})

module.exports = router

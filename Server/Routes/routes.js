const express = require('express')
const router = express.Router()
const User = require('../Models/User')

router.get('/', (req, res)=>{
    res.send('hello')
})

//sending the user details to the client
router.get('/profile/:userId', (req, res) =>{
    User.findById(req.params.userId, function(error, user){
        res.send(user)
    })
})

router.put('/users/:currentUser', (req, res) => {
    User.findByIdAndUpdate(req.params.id),
    {
         $push:{
             likes: req.body.id
         }
    }
})

module.exports = router

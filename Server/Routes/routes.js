const express = require('express')
const router = express.Router()
const User = require('../Models/User')
const Chatkit = require('@pusher/chatkit-server');


const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:5be2ab98-48ee-41f2-a814-0adeb5e65142',
    key: 'f64ccf1c-2215-44f5-a5b0-38b064e4e6f9:Is7KDpsNvfg8uqnB7xVMIJ4dDbgXupHooKZkhMEeaKw='
})


//get all users
router.get('/users', (req, res) => {
    User.find({}, function (err, user) {
        res.send(user)
    });
})

router.get('/chats/:currentUserId', (req, res) => {
    User.findOne({ _id: req.params.currentUserId }, function (error, user) {
        console.log(user)
        res.send(user)
    })
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

router.put('/sendmessages/:currentUserId', (req, res) => {
    console.log(req.body.message)
    User.findByIdAndUpdate(req.params.currentUserId, {
        $push: {
            messages: req.body.message
        }
    }, { new: true }, function(err, data){
        console.log(data);
    })
    console.log(req.params.currentUserId);
    
    res.send(req.body.message)
})

router.put('/users/:currentUser', (req, res) => {
    console.log("here with " + req.params.currentUser)

    updateMatches = (userOne, userTwo) => {
        User.findByIdAndUpdate(userOne, {
            $push: {
                matches: `${userTwo._id}`
            }

        }, { new: true }, function (err, data) {
            console.log(data)
        })
        User.findByIdAndUpdate(userTwo, {
            $pull: {
                likes: `${userOne._id}`
            }
        }, { new: true }, function (err, data) {
            console.log('you have a match')

        })
    }

        updateLikes = (userOne, userTwo) => {
            User.findByIdAndUpdate(userOne, {
                $push: {
                    likes: `${userTwo._id}`
                }

            }, { new: true }, function (err, data) {
            })
        }
    ids = [req.params.currentUser, req.body.id]
    console.log(`req id: ${req.body.id}`)
    console.log(`cuurent id: ${req.params.currentUser}`)

    User.find({
        _id: {
            $in: [req.params.currentUser, req.body.id]
        }
    }, function (err, data) {
        const activeUser = data[1]
        const likedUser = data[0]
        if (likedUser.likes.find(liked => activeUser.id == liked)) {
           //for active user
           console.log("calling")
            updateMatches(activeUser, likedUser)
            //for likedUser
            updateMatches(likedUser, activeUser)
        } else {
            updateLikes(activeUser, likedUser)
        }
        console.log(`added match`)
})
    res.end()
})

router.post('/user',(req,res)=>{
    const {username} = req.body
    chatkit
        .createUser({
            name: username,
            id: username
        })
        .then(()=> res.sendStatus(201))
        .catch(error =>{
            if(error.error_type === 'service/chatkit/user_already_exists'){
                res.sendStatus(200)
            }
            else{
                res.status(error.statusCode).json(error)
            }
        })
})





module.exports = router

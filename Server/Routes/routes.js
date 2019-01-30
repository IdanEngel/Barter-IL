const express = require('express')
const router = express.Router()
const User = require('../Models/User')


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




module.exports = router

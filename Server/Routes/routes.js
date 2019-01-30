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
        updatLikes = (userOne, userTwo) => {
            User.findByIdAndUpdate(userOne, {
                $push: {
                    likes: `${userTwo._id}`
                }

            }, { new: true }, function (err, data) {
            })
        }
    
    
    ids = [req.params.currentUser, req.body.id]
    User.find({
        _id: {
            $in: [req.params.currentUser, req.body.id]
        }
    }, function (err, data) {
        const activeUser = data[0]
        const likedUser = data[1]
        if (likedUser.likes.find(liked => activeUser._id == liked)) {
            updateMatches(activeUser, likedUser)
            updateMatches(likedUser, activeUser)
        } else {
            updatLikes(activeUser, likedUser)
        }

    })
    res.end()
})




module.exports = router

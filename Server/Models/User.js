const mongoose = require('mongoose')
const Scehma = mongoose.Schema


const userSchema = new Scehma ({
    name: String,
    lastName: String,
    username: String,
    password: String,
    email: String,
    interests: Array,
    likes: Array,
    matches: Array,
    reviews: Array,
    messages: Array,
    location: String,
    age: Number,
    dislikes: Array,
    skills: Array,
    imgURL: String
})

const User = mongoose.model("User", userSchema)

module.exports = User

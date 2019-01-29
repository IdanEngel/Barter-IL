const mongoose = require('mongoose')
const Scehma = mongoose.Schema


const userSchema = new Scehma ({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    interests: Array,
    matches: Array,
    reviews: Array,
    location: String,
    age: Number,
    skills: Array
})

const User = mongoose.model("User", userSchema)

module.exports = User

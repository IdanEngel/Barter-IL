const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
// const api = require('./server/routes/api')
// const User = require('./server/model/schemas')
// const jsonData = require('./dummy-data/dummyData')

app.use(express.static(path.join(__dirname, 'src')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(`mongodb://localhost/BarterIL`, { useNewUrlParser: true })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

// app.use('/', api)


let saveToDB = () => {
    for (let i of jsonData.users) {
        let UserData = new User(i)
        UserData.save()
    }
}
// saveToDB()

app.listen(8000, function () {
    console.log(`Yo yo i'm running here!`)
})

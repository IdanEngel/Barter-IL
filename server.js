const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const routes = require('./server/Routes/routes')
const User = require('./server/Models/User')
const dummyData = require('./src/dummyData')
const socket= require('socket.io')


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

app.use('/', routes)



let saveToDB = () => {
    for (let i of dummyData) {
        let UserData = new User(i)
        UserData.save()
    }
}
// saveToDB()

const server = app.listen(8000, function () {
    console.log(`Yo yo i'm running here!`)
})

const io = socket(server)
const users={}

io.on('connection', function(socket){
    console.log('made socket connection', socket.id);
    // socket.join()
    socket.on('newUser',(room)=>{
        users[name]=room
    })

    socket.on('chat', function(data){
        io.emit('new_message', data)
        // console.log(socket.nickname)
        // let newMessage = new Chat({message: data.message, name: socket.nickname})
        // newMessage.save( )
    
    })

})


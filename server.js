//Define Requirements
var express = require('express')
var path = require('path')

//Express->App and Port Definition
const app = express()
let port = process.env.port || 3000

//Allow express to handle post requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Friend List Import
var friendList = require('./app/data/friends.js')

//Routes#######################################################################

//HTML ROUTES
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
})

app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
})

//API ROUTES
app.get('/api/friends', function(req, res) {
    res.json(friendList)
})

app.post('/api/friends', function(req, res) {
    console.log(req.body)
    friendList.push(req.body)
    res.send('Added record')
})

//#############################################################################
//Listen
app.listen(port, function () {
    console.log(`Listening on port ${port}.`)
})
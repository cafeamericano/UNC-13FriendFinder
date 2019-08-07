//Define Requirements
var express = require('express')
var path = require('path')

//Express->App and Port Definition
const app = express()
let port = process.env.PORT || 3000

//Allow express to handle post requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Express folder definitions
app.use(express.static(__dirname + '/app/public/'));

//#############################################################################

app.use(require('./app/routing/apiRoutes.js'))
app.use(require('./app/routing/htmlRoutes.js'))

//#############################################################################

//Listen
app.listen(port, function () {
    console.log(`Listening on port ${port}.`)
})
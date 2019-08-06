//Define Requirements
var express = require('express')
var path = require('path')

//Express->App and Port Definition
const app = express()
let port = process.env.PORT || 3000

//Allow express to handle post requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Friend List Import
var friendList = require('./app/data/friends.js')

//Express folder definitions
app.use(express.static(__dirname + '/app/public/'));

//#############################################################################

//HTML ROUTES
app.get('/', function (req, res) {
    res.sendFile('home.html', { root: __dirname + `/app/public/` });
})

app.get('/survey', function (req, res) {
    res.sendFile('survey.html', { root: __dirname + `/app/public/` });
})

//API ROUTES
app.get('/api/friends', function (req, res) {
    res.json(friendList)
})

app.post('/api/friends', function (req, res) {
    let yourScores = (Object.values(req.body))
    console.log(yourScores)
    res.send(findBestMatch(yourScores))
})

//#############################################################################

//Listen
app.listen(port, function () {
    console.log(`Listening on port ${port}.`)
})

//#############################################################################

function findBestMatch(yourScores) {

    console.log(` ************* SHOWING FULL LIST OF FRIENDS ************* `)
    for (i = 0; i < friendList.length; i++) {
        console.log(friendList[i].name)
    }

    console.log(` ************* FINDING BEST MATCH ************* `)
    //Establish an empty result object
    let resultObj = {}

    //Calculate difference between your scores and everyone else's
    for (i = 0; i < friendList.length; i++) {
        let totalDifference = 0;
        let theirScores = (friendList[i].scores)
        for (j = 0; j < theirScores.length; j++) {
            totalDifference += Math.abs(yourScores[j] - theirScores[j])
        }

        let personName = friendList[i].name
        let personDiff = totalDifference
        console.log(`${personName}: ${personDiff}`)

        //Add that person to the result object with their score
        resultObj[personName] = personDiff
    }

    //Put the scores into an array
    let scores = Object.values(resultObj)

    //Find the lowest value
    let indexOfLeastDifferent;
    let lowestValue;
    for (i = 0; i < scores.length; i++) {
        if (scores[i] < lowestValue || lowestValue === undefined) {
            console.log(scores[i])
            lowestValue = scores[i]
            indexOfLeastDifferent = i
        }
    }
    console.log('Index of Least Different:' + indexOfLeastDifferent)

    //Match index of lowest score to index of best match's name
    let names = (Object.keys(resultObj))
    let bestMatchName = (names[indexOfLeastDifferent])

    //Find the photo of the best match
    let bestMatchPhoto = '';
    for (i = 0; i < friendList.length; i++) {
        if (friendList[i].name === bestMatchName) {
            bestMatchPhoto = friendList[i].photo
        }
    }

    //Create a response object contaning the name and photo of the best match
    let bestMatchObject = {
        name: bestMatchName,
        photo: bestMatchPhoto
    }

    //Return the best match object
    console.log(bestMatchObject)
    return bestMatchObject
}
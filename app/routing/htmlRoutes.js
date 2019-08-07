const express = require('express')
const router = express.Router();

//HTML ROUTES
router.get('/', function (req, res) {
    res.sendFile('home.html', { root: __dirname + `/../public/` });
})

router.get('/survey', function (req, res) {
    res.sendFile('survey.html', { root: __dirname + `/../public/` });
})

module.exports = router;
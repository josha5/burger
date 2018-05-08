const express = require("express");

// importing the burger.js model to use its database functions.
const burger = require("../models/burger.js");


const router = express.Router();

router.get('/', function (req, res) {
    res.redirect('/index');
});

router.get('/index', function (req, res) {
    burger.all(function(data) {
        var hbsObject = { burgers: data };
        res.render('index', hbsObject);

        console.log(hbsObject);
    });
});

module.exports = router;
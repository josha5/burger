const express = require("express");

// importing the burger.js model to use its database functions.
const burger = require("../models/burger.js");


const router = express.Router();

router.get('/', function (req, res) {
    res.redirect('/index');
});

router.get('/index', function (req, res) {
    burger.All(function(data) {
        var hbsObject = { burgers: data };
        res.render('index', hbsObject);

        // console.log(hbsObject);
    });
});


router.post('/burger/create', function (req, res) {
    console.log("This is the body: " + JSON.stringify(req.body));
    burger.insert(req.body.burger_name, function() {
      res.redirect('/index');
    });
  });

router.post('/burger/eat/:id', function (req, res) {
    burger.update(req.params.id, function() {
      res.redirect('/index');
    });
});

module.exports = router;
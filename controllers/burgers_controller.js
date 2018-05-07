const express = require("express");

// importing the burger.js model to use its database functions.
const burger = require("../models/burger.js");


const router = express.router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };

        console.log(hbsObject);
    });
});


module.exports = router;
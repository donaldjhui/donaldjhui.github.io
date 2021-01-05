var express = require('express');
var app = express();
//we'll use axios if we end up making API calls somewhere.
//const axios = require('axios');
//var bodyParser = require("body-parser");

//app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", function (req, res) {
//     res.render("client/src/index");
// })

// const port = process.env.PORT || 3000;
// app.use(express.json());

// const router = require('./client/src/index');
// app.use('/index', router);

//need to go back to those RESTFUL lessons for doing API stuff
// app.get('/list', function (req, res) {
// 	res.send("This is the page to make a list")
// });

app.listen(process.env.PORT || 3000, process.env.IP, function () {
    console.log('Donald be listenin');
});
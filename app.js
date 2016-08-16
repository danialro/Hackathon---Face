// SERVER - app.js

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var app = express();


// app.use(bodyParser.json());   // This is the type of body we're interested in
// app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static('public'));
app.use(express.static('node_modules'));



app.get('/', function(req, res){
  res.sendFile(__dirname + "index.html");
});

// Here would be a route for getting all of our compared images (that are in the DB)
// app.get('', function (req, res) {
//   "Beer".find(function(error, "beers") {
//     res.send("beers");
//   })
// });


// // Here would be a post image to server as a new img object
// console.log('yo from ther server')
// app.post('', function (req, res, next) {
  
//   var "beer = new Beer"(req.body);

//   "beer".save(function(err, "beer") { // this will save it to DB
//     if (err) { 
//       return next(err);
//     }
//     res.json("beer");
//   });
// });


app.listen(8000);











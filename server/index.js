const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const dbGen = require('../database/propMaker.js');
const db = require('../database/index.js');
const helper = require('../database/helper.js');
const axios = require('axios');

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

app.use(express.static(__dirname + '../client/dist'));

app.get('/home', (req, res) => {
  var results = helper.bringMeMyProperties();
  console.log('seeded data: ', results)
})

app.get('/home/similar', (req, res) => {
  var bed = req.params.bed;
  var bath = req. params.bath;

  db.similarListings(bed, bath, (err, response) =>{  // callback made in route call
    if (err) {
      console.error(err)

      res.sendStatus(400)
    } else {
      console.log('Successful Data Call')
      // res.end(JSON.stringify(response))
      // JSON.stringify() looks like a mess on Postman
      res.json(response) // res.json() is a lot more presentable in Postman
    }
  })
});

app.get('/home/newest', (req, res) => {  // success response call made in the db.newlyListed function¸/*  */
  db.newlyListed(res)
});

app.listen(3002, function() {
  console.log('listening on port 3002!');
});




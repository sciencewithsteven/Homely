const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const db = require('../database/index.js');
const helper = require('../database/helper.js');

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

  db.similarListings(bed, bath, (err, response) =>{
    if (err) {
      console.error(err)
      res.sendStatus(400)
    } else {
      res.json(response)
    }
  })
});

app.get('/home/newest', (req, res) => {
  db.newlyListed(res)
});

app.listen(3002, function() {
  console.log('listening on port 3002!');
});




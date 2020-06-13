const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fec_1',
{ useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// Check database connection
db.once("open", () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

// Make a collection
let propertySchema = mongoose.Schema({
  id: Number,
  listing_num: Number,
  house_num: Number,
  zip_code: Number,
  street_name: String,
  city: String,
  state: String,
  full_address: String,
  num_bed: Number,
  num_bath: Number,
  sq_ft: Number,
  prop_url: String,
  main_pic_url: String,
  original_list_price: Number,
  current_list_price: Number,
  list_date: Date,
  num_of_days_listed: Number,
  favorite: Boolean,
});


// Compile schema into model
let Repo = mongoose.model('property', propertySchema);

module.exports = {

  save: (properties) => {
    console.log('save: ', properties)

    properties.forEach(property => {
      var repo = new Repo(property); //new document
      repo.save((err, property) => {
        if (err) {
          console.log(err);
        } else {
          console.log('DATA SAVED IN database/index.js: ', property)
        }
      })
    })
      // propertyArray.push(propertyObj);
  },

  // API 'house/similar'
  similarListings: (bed, bath, beyond) => {  // bed/bath = passes in {params: {bed: x, bath: y}}

    return Repo.find().sort([["num_bed", bed ], ["num_bath", bath]]).limit(15).exec(beyond) // beyond = callback
  },

  // API 'house/newest'
  newlyListed: (res) => {

    return Repo.find().sort({num_of_days_listed: 1}).limit(15).exec((err, list) => { // Callback from route
      if (err) {
        return next(err)
      }
      console.log('newlyListed: ', list)
      res.json(list); // res.json(list) makes a cleaner looking list in Postman over JSON.stringify(list)
    });
  }
}
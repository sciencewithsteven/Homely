const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fec_1',
{ useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.once("open", () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

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


let Repo = mongoose.model('property', propertySchema);

module.exports = {

  save: (properties) => {

    properties.forEach(property => {
      var repo = new Repo(property);
      repo.save((err, property) => {
        if (err) {
          console.log(err);
        } else {
          console.log('DATA SAVED IN database/index.js: ', property)
        }
      })
    })
  },

  // API 'house/similar'
  similarListings: (bed, bath, beyond) => {

    return Repo.find().sort([["num_bed", bed ], ["num_bath", bath]]).limit(15).exec(beyond);
  },

  // API 'house/newest'
  newlyListed: (res) => {

    return Repo.find().sort({num_of_days_listed: 1}).limit(15).exec((err, list) => {
      if (err) {
        return next(err)
      }
      console.log('newlyListed: ', list)
      res.json(list);
    });
  }
}
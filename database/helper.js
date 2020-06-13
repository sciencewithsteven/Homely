// const propPic = require('./images');
const dbGen = require('../database/propMaker.js');
const db = require('./index.js');

module.exports = {

  bringMeMyProperties: () => {
    var objContainer = [];

    for (var i = 0; i < 100; i++) {
      let properties = dbGen.make100();
      objContainer.push(properties);
    }

    db.save(objContainer);

  }
}
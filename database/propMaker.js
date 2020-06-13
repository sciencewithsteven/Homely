const streetName = require('./streetNames.js');
const urlMaker = require('./urlMaker.js');

module.exports = {

  make100: () => {
    var objContainer = [];
    var propObj = {};

  let randomListingNum = () => {
    let max = 9;
    let listingNum = [];

    for (var i = 0; i < 4; i++){
      let num = Math.floor((Math.random() * Math.floor(max)) + 1);
      listingNum.push(num);
    }
    let join = listingNum.join('');
    let finalNum = Number(join);

    propObj.listing_num = finalNum;
  };

  let randomHouseNum = () => {
    let max = 9;
    let houseNum = [];

    for (var i = 0; i < 4; i++){
      let num = Math.floor((Math.random() * Math.floor(max)) + 1);
      houseNum.push(num);
    }
    let join = houseNum.join('');
    let finalNum = Number(join);

    propObj.house_num = finalNum;
  };

  let randomZipCode = () => {
    let max = 9;
    let zipNum = [];

    for (var i = 0; i < 5; i++){
      let num = Math.floor((Math.random() * Math.floor(max)) + 1);
      zipNum.push(num);
    }
    let join = zipNum.join('');
    let finalNum = Number(join);

    propObj.zip_code = finalNum;
  };

  let randomStreetName = () => {
    var street = streetName.streetMe.streetName();
    propObj.street_name = street;
  };

  let randomCity = () => {
    var city = streetName.streetMe.cityName();
    propObj.city = city;
  }

  let randomState = () => {
    propObj.state = 'CA';
  };

  let fullAddressString = () => {
    let houseNum = propObj.house_num.toString();
    let zipNum = propObj.zip_code.toString();
    var fullString = `${houseNum} ${propObj.street_name} ${propObj.city} ${propObj.state}, ${zipNum}`;

    propObj.full_address = fullString;
  };

  let randomBedNum = () => {
    let max = 9;
    let bedNum = [];

    for (var i = 0; i < 1; i++){
      let num = Math.floor((Math.random() * Math.floor(max)) + 1);
      bedNum.push(num);
    }
    let join = bedNum.join('');
    let finalNum = Number(join);

    propObj.num_bed = finalNum;
  };

  let randomBathNum = () => {
    let max = 9;
    let bathNum = [];

    for (var i = 0; i < 1; i++){
      let num = Math.floor((Math.random() * Math.floor(max)) + 1);
      bathNum.push(num);
    }
    let join = bathNum.join('');
    let finalNum = Number(join);

    propObj.num_bath = finalNum;
  };

  let randomSqFt = () => {
    let max = 9;
    let zipNum = [];

    for (var i = 0; i < 5; i++){
      let num = Math.floor((Math.random() * Math.floor(max)) + 1);
      zipNum.push(num);
    }
    let join = zipNum.join('');
    let finalNum = Number(join);

    propObj.sq_ft = finalNum;
  };

  let propUrl = () => {
    var urlArray = urlMaker.urlMaker.propertyUrl();
    propObj.prop_url = urlArray[0];
    propObj.main_pic_url = urlArray[1];
  };

  let randomListPrice = () => {
    let max = 9;
    let priceNum = [];

    for (var i = 0; i < 7; i++){
      let num = Math.floor((Math.random() * Math.floor(max)) + 1);
      priceNum.push(num);
    }
    let join = priceNum.join('');
    let finalNum = Number(join);

    propObj.original_list_price = finalNum;
  };

  let currentListPrice = () => {
    let originalPrice = propObj.original_list_price;
    let percent = Math.random() * 2;
    let upOrDown = Math.random() * 2;
    if (upOrDown > 1) {
      let markUp = Math.floor(originalPrice * percent);
      propObj.current_list_price = markUp;
    } else {
      let markDown = Math.floor(originalPrice * percent);
      propObj.current_list_price = markDown;
    }
  };

  let listingDate = () => {
    var month = Math.floor(Math.random() * 4);
    var day = Math.floor(Math.random() * 31);
    var d = new Date(2020, month, day);
    propObj.list_date = d;
  };

  let daysListed = () => {
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth();
    var originalDate = propObj.list_date;
    var originalMonth = originalDate.getMonth();
    var originalDay = originalDate.getDate();
    var listDayCount = 0;
    var currentDayCount = 0;
    var totalDays;

    if (originalMonth === 0){ // Jan
     listDayCount += originalDay;
    }
    if (originalMonth === 1) { // Feb
      listDayCount += 31;
      listDayCount += originalDay;
    }
    if (originalMonth === 2) { // March
      listDayCount += 59;
      listDayCount += originalDay;
    }
    if (originalMonth === 3) { // April
      listDayCount += 90;
      listDayCount += originalDay;
    }
    if (originalMonth === 4) { // May
      listDayCount += 120;
      listDayCount += originalDay;
    }
    if (currentMonth === 4) {
      currentDayCount += 120;
      currentDayCount += currentDay;
    }
    totalDays = currentDayCount - listDayCount;
    propObj.num_of_days_listed = totalDays;
  };

  let favoriteProp = () => {
    let random = Math.random() * 2;
    if (random > 1) {
      propObj.favorite = true;
    } else {
      propObj.favorite = false;
    }
  };

  randomListingNum();
  randomHouseNum();
  randomZipCode();
  randomStreetName();
  randomCity();
  randomState();
  fullAddressString();
  randomBedNum();
  randomBathNum();
  propUrl();
  randomListPrice();
  currentListPrice();
  listingDate();
  daysListed();
  favoriteProp();

  return propObj;
}
};
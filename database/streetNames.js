var attributes = [

  'Desert Sunset', 'Tundra Peaks', 'Mountain Ridge', 'Open Spaces', 'Field Of Dreams',
  'Urban Trails', 'Suburban Colonies', 'Rural Heights', 'Alpine Valley', 'Savannah',
  'Tropical Meadows', 'Chapparal', 'Roxbury', 'Morning Star', 'Hidden Hills',
  'Pasadena', 'decisive', 'Washington', 'Hidden Hollow', 'Telegraoh',
  'McCarthy', 'Forest Hills', 'Anaheim', 'Martin Luther King', 'Beverly',
  'Rodeo Estates', 'Rancho Vino', 'N. 32nd', 'Money Bags', 'The Lords Glory',
  'Mason', 'Facebook', 'Billionaires', 'Broken Dreams', 'Money Maker',
  'Toxic Masculinity', 'Litigious Battles', 'Petulant Falls', 'Apache Creek', 'Temperamental One Percent',
  'Amber Valley', 'Coral Coast', 'Ivory Hunts', 'Jet Blue', 'Nacre Caves',
  'Pearly White', 'Obsidian Ranch', 'Monocle', 'Saint Deigo', 'Saint Francisco',
  'Saint Cruz', 'Saint Bernardino', 'Saint Bruno', 'Saint Archer', 'Iron Rod',
  'Noble Brick', 'Horse Bridal', 'Saint Barbara', 'Saint Jose', 'Tahoe Mills',
  'Victora Heights', 'Summet Estates', 'Ceasar Chavez', 'Mar Vista', 'Evenshire Flats',
  'Wilmington',
];

var objects = [
  'Cir.', 'Dr.', 'Way', 'Blvd.', 'Rd.', 'Ct.', 'Path',
  'Ave.', 'St.', 'Vis.', 'Vlg.', 'Vl.', 'Tpke.', 'Vly.',
  'Trl.', 'Ter.', 'Sqr.', 'Spgs.', 'Rue', 'Shls.', 'Shr.',
  'Shrs.', 'Rdg.', 'Rnch.', 'Pl.',
  'Pt.', 'Prt.', 'Pass', 'Pkwy.', 'Oval', 'Mls.', 'Mnr.', 'Loop', 'Ln.',
  'Knls.', 'Is.', 'Isle.', 'Hvn.', 'Hls.', 'Holw.', 'Gln.', 'Grvs.', 'Gdns.', 'Fls.',
  'Crst.', 'Cmns.', 'Cv.', 'Crk.', 'Clfs.', 'Cvs.', 'Cyn.', 'Blfs.', 'Bch.', 'Bnd.', 'Brks.',
];

var cities = [
  'Pasedena', 'San Francisco', 'Los Altos Hills', 'Tenderloin', 'Hollywood', 'East Oakland', 'Oakland', 'Catalina', 'North Park', 'La Puente', 'Laguna Hills', 'Laguna Beach', 'Malibu Canyon', 'Santa Clara', 'Palo Alto', 'Tahoe', 'Merced', 'San Deigo', 'Santa Monica', 'Compton', 'Tijuana', 'Newport', 'Venice', 'NoHo', 'SoHo', 'Beverly Hills', 'Washington Heights', 'Carmel', 'Vallejo', 'Walnut Creek', 'Marthas Vineyard', 'Hampton Downs', 'North HamptonShire', 'South Buckinghamshire', 'Leicester', 'Winchester', 'Oxford',
];

module.exports = {

  streetMe: {
    streetName: function createAddress() {
      var randomAttribute = attributes[Math.floor(Math.random() * attributes.length)];
      var randomObject = objects[Math.floor(Math.random() * objects.length)];
      return randomAttribute + ' ' + randomObject;
    },
    cityName: function createCity() {
      var randomCity = cities[Math.floor(Math.random() * cities.length)];
      return randomCity;
    }
  }
};
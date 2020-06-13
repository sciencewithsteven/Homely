var propertyCombos = [
  ['https://www.trulia.com/p/ca/san-francisco/2698-pacific-ave-san-francisco-ca-94115--2082962538',
  'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISbphvyo5csmvc0000000000.webp'],
  ['https://www.trulia.com/p/ca/san-francisco/2602-pacific-ave-san-francisco-ca-94115--2082962256', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISjr4x7wcjh1w50000000000.webp'],
  ['https://www.trulia.com/p/ca/san-francisco/2820-scott-st-san-francisco-ca-94123--2083043003', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISn6noelzwdzgc1000000000.webp'],
  ['https://www.trulia.com/p/ca/san-francisco/181-fremont-st-69-b-san-francisco-ca-94105--2319961215', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISbxffzz9ewajc1000000000.webp'],
  ['https://www.trulia.com/p/ca/san-francisco/846-34th-ave-san-francisco-ca-94121--2083018066', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISb957jpzvdv5l1000000000.webp'],
  ['https://www.trulia.com/p/ca/san-francisco/2000-washington-st-7-san-francisco-ca-94109--2082888628', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISfs6opzer2nvk0000000000.webp'],
  ['https://www.trulia.com/p/ca/san-francisco/142-28th-ave-san-francisco-ca-94121--2083006156', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISjvnu1mztu9e30000000000.webp'],
  ['https://www.trulia.com/p/ca/san-francisco/488-folsom-st-5302-san-francisco-ca-94105--2419864063', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISrtvtfm369njd1000000000.webp'],
  ['https://www.trulia.com/p/ca/san-francisco/481-jersey-st-san-francisco-ca-94114--1002366224', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/IS7218mopkhizq0000000000.webp'],
  ['https://www.trulia.com/p/ca/beverly-hills/67-beverly-park-ct-beverly-hills-ca-90210--2077509811', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISqdbzxee17ptk1000000000.webp'], // 10
  ['https://www.trulia.com/p/ca/beverly-hills/1231-lago-vista-dr-beverly-hills-ca-90210--1031560542', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISjjqo96yzhnit1000000000.webp'],
  ['https://www.trulia.com/p/ca/beverly-hills/34-beverly-park-cir-beverly-hills-ca-90210--1057495211', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISzv6agnrfhxym0000000000.webp'],
  ['https://www.trulia.com/p/ca/beverly-hills/1012-n-hillcrest-rd-beverly-hills-ca-90210--1054206265', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/IS7an6aij75vok0000000000.webp'],
  ['https://www.trulia.com/p/ca/beverly-hills/1130-carolyn-way-beverly-hills-ca-90210--2077506481', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISjrkhuvovhfwd0000000000.webp'],
  ['https://www.trulia.com/p/ca/beverly-hills/1160-san-ysidro-dr-beverly-hills-ca-90210--1017747800', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISjvbla1apr6o50000000000.webp'],
  ['https://www.trulia.com/p/ca/los-angeles/1307-sierra-alta-way-los-angeles-ca-90069--1001911096', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/IS76gibg7367ae0000000000.webp'],
  ['https://www.trulia.com/p/ca/los-angeles/9127-thrasher-ave-los-angeles-ca-90069--2077486935', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/IS7a3nd0yblqwg1000000000.webp'],
  ['https://www.trulia.com/p/ca/los-angeles/9444-sierra-mar-pl-los-angeles-ca-90069--2077487443', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISvkr3zv3tkr421000000000.webp'],
  ['https://www.trulia.com/p/ca/los-angeles/2235-hercules-dr-los-angeles-ca-90046--2077399622', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISrlpf2z6t17sl1000000000.webp'],
  ['https://www.trulia.com/p/ca/los-angeles/1527-rising-glen-rd-los-angeles-ca-90069--2077483565', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISfkkph2d4cdoj0000000000.webp'], // 20
  ['https://www.trulia.com/p/ca/los-angeles/8469-hollywood-blvd-los-angeles-ca-90069--2077485065', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/IS7eid3rzku28n1000000000.webp'],
  ['https://www.trulia.com/p/ca/los-angeles/8971-shoreham-dr-los-angeles-ca-90069--2077486415', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISjfz4xwnvucc60000000000.webp'],
  ['https://www.trulia.com/p/ca/malibu/23800-malibu-crest-dr-malibu-ca-90265--1005840380', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISbtsugknheaim1000000000.webp'],
  ['https://www.trulia.com/p/ca/malibu/27930-pacific-coast-hwy-malibu-ca-90265--2077609931', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/IS37ilivspncdb0000000000.webp'],
  ['https://www.trulia.com/p/ca/los-angeles/12255-sky-ln-los-angeles-ca-90049--2077416731', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISbxbsamrh0kr21000000000.webp'],
  ['https://www.trulia.com/p/ca/los-angeles/10911-chalon-rd-los-angeles-ca-90077--2077489094', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISbdosv1jnocxi0000000000.webp'],
  ['https://www.trulia.com/p/ca/carmel/166-spindrift-rd-carmel-ca-93923--2082552636', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISvstiy931wq4h1000000000.webp'],
  ['https://www.trulia.com/p/ca/carmel/72-fern-canyon-rd-carmel-ca-93923--2082557938', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/IS3j3inpmj59id1000000000.webp'],
  ['https://www.trulia.com/p/ca/carmel/164-corona-rd-carmel-ca-93923--2082552624', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/IS3nq26xaiumvk0000000000.webp'],
  ['https://www.trulia.com/p/ca/tarzana/19101-gayle-pl-tarzana-ca-91356--2078597747', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISf0da91plntjb0000000000.webp'], // 30
  ['https://www.trulia.com/p/ca/tarzana/5114-vanalden-ave-tarzana-ca-91356--2078601123', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISbtcy4llndiu31000000000.webp'],
  ['https://www.trulia.com/p/ca/hidden-hills/5546-jed-smith-rd-hidden-hills-ca-91302--2078328204', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISf40rw1kp4c1g0000000000.webp'],
  ['https://www.trulia.com/p/ca/calabasas/25365-prado-de-la-felicidad-calabasas-ca-91302--2078323034', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISzzxtc0283nl50000000000.webp'],
  ['https://www.trulia.com/p/ca/hidden-hills/25211-jim-bridger-rd-hidden-hills-ca-91302--1151245261', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISqtzshyyxz3650000000000.webp'],
  ['https://www.trulia.com/p/ca/calabasas/23520-park-south-st-calabasas-ca-91302--2078320296', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISr1icj9egdtb60000000000.webp'],
  ['https://www.trulia.com/p/ca/calabasas/25300-prado-de-ambar-calabasas-ca-91302--2078322938', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISvctjaix8jh900000000000.webp'],
  ['https://www.trulia.com/p/ny/water-mill/40-dune-rd-water-mill-ny-11976--1150553136', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISv0ca6f0f1ovg0000000000.webp'],
  ['https://www.trulia.com/p/ma/edgartown/96-beach-rd-edgartown-ma-02539--1045248792', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISneh9tsll4tzd0000000000.webp'],
  ['https://www.trulia.com/p/fl/coral-gables/4-tahiti-beach-island-rd-coral-gables-fl-33143--1005341710', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISr1elbuaqylm41000000000.webp'],
  ['https://www.trulia.com/p/fl/coral-gables/6815-sunrise-dr-coral-gables-fl-33133--2034803746', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISjb8199j2ydlp1000000000.webp'], // 40
  ['https://www.trulia.com/p/fl/miami-beach/6585-allison-rd-miami-beach-fl-33141--1004961242', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/IS33znkeeyiyjd0000000000.webp'],
  ['https://www.trulia.com/p/fl/surfside/9001-collins-ave-801-surfside-fl-33154--2355092700', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/IS72pqgzw4nheg1000000000.webp'],
  ['https://www.trulia.com/p/fl/miami-beach/440-s-hibiscus-dr-miami-beach-fl-33139--1001806102', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISvkfer3hjrotm0000000000.webp'],
  ['https://www.trulia.com/p/fl/key-biscayne/500-s-mashta-dr-key-biscayne-fl-33149--1068878408', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISjjyuj8ipy4yg0000000000.webp'],
  ['https://www.trulia.com/p/fl/coral-gables/8585-old-cutler-rd-coral-gables-fl-33143--2034873995', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISbd4l83ow6xkm0000000000.webp'],
  ['https://www.trulia.com/p/fl/coral-gables/90-leucadendra-dr-coral-gables-fl-33156--1011529655', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISb1772b5jkr971000000000.webp'],
  ['https://www.trulia.com/p/fl/miami-beach/13-star-island-dr-miami-beach-fl-33139--1001715630', 'https://static.trulia-cdn.com/pictures/thumbs_6/zillowstatic/ISnqak6he4j7ub1000000000.webp'] // 47
];


module.exports = {

  urlMaker: {
    propertyUrl: function makeUrl() {
      var propertyPackage = [];
      var randomProperty = propertyCombos[Math.floor(Math.random() * propertyCombos.length)];
      propertyPackage.push(randomProperty[0], randomProperty[1])
      return propertyPackage;
    }
  }
};
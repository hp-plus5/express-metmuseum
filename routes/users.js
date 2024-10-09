var express = require('express');
var router = express.Router();

router.get('/', function(requestFromFrontend, responseToFrontend, next) {
  /** QUERYING THE API: MODELS */
  // docs: https://metmuseum.github.io/#object

  /** mockup query result based on API docs for the purpose of styling frontend */
  var desiredReturnedObject = {
    primaryImageSmallTest: "https://images.metmuseum.org/CRDImages/ep/web-large/DT1467.jpg",
    primaryImageSmallTestTwo: "https://images.metmuseum.org/CRDImages/as/web-large/DP251139.jpg",
    objectID: 437133,
    primaryImage: "https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg",
    primaryImageSmall:"https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg",
    title: "Wheat Field with Cypresses",
    artistDisplayName: "Vincent van Gogh",
    artistAlphaSort: "Gogh, Vincent van",
    objectDate: "19th century",
    medium: "Oil on canvas",
    artistNationality: "French, born Romania",
    artistGender: '',
    artistWikidata_URL: "https://www.wikidata.org/wiki/Q694774",
    objectWikidata_URL: "https://www.wikidata.org/wiki/Q432253",
    linkResource: "https://www.metmuseum.org/art/collection/search/547802"
  }

  responseToFrontend.render('index', { title: 'Classical', apiResult: desiredReturnedObject });
});

module.exports = router;

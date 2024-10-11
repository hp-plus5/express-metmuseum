var express = require('express');
var https = require('node:https');
var router = express.Router();

/* GET a basic painting from the MET API. */
router.get('/', function(requestFromFrontend, responseToFrontend, next) {
  /** QUERYING THE API: MODELS */
  // docs: https://metmuseum.github.io/#object

  /** mockup query result based on API docs for the purpose of styling frontend */
  var desiredReturnedObject = {
    primaryImageSmallTest: "https://images.metmuseum.org/CRDImages/ep/web-large/DT1467.jpg",
    primaryImageSmallTestTwo: "https://images.metmuseum.org/CRDImages/as/web-large/DP251139.jpg",
    objectID: 436535,
    primaryImage: "https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg",
    primaryImageSmall:"https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg",
    title: "Wheat Field with Cypresses",
    artistDisplayName: "Vincent van Gogh",
    artistAlphaSort: "Gogh, Vincent van",
    objectDate: "1867", // "1865-67", "ca. 1796", "19th century"; there are objectBeginDate and objectEndDate for more computer-legible answers
    medium: "Oil on canvas",
    artistNationality: "French, born Romania",
    artistGender: '', // only ever has "female" specified
    artistWikidata_URL: "https://www.wikidata.org/wiki/Q694774",
    objectWikidata_URL: "https://www.wikidata.org/wiki/Q432253",
    linkResource: "https://www.metmuseum.org/art/collection/search/547802"
  }

  /** QUERYING THE API: THE CALL */
  const getArtwork = (httpRequest) => {
    return new Promise((resolve, reject) => {
      const apiRequestSmaller = https.request(httpRequest, (httpResponse) => {
        let data = "";

        httpResponse.on("data", (d) => {
          data += d;
        });

        httpResponse.on("end", () => {
          data = JSON.parse(data.toString().trim());

          if (httpResponse.statusCode === 200) {
            resolve(data);
          } else {
            reject(new Error(`Error code: ${httpResponse.statusCode}.`));
          }
        });

        httpResponse.on("error", (error) => {
          reject(new Error(error));
        });
      });

      apiRequestSmaller.end();
    });
  };

  let apiResult = {};

  getArtwork({
    hostname: "collectionapi.metmuseum.org",
    path: "/public/collection/v1/objects/436535",
    method: "GET",
    headers: {
      Accept: "application/json"
    },
  })
  .then((data) => {
    apiResult = data;
    responseToFrontend.render('index', { title: 'Classical', apiResult: apiResult });
  })
  .catch((error) => {
    responseToFrontend.send(error);
  })
});

module.exports = router;

var WIKIAPI =
  "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=";
// %20 indicates a space in the URL

//2 is suppose to be a var we get from url
var NBAPI = "https://www.balldontlie.io/api/v1/teams/2";

function fetchNbaStats() {
  fetch(NBAPI).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data.full_name);
      });
    }
  });
}

function fetchBio() {}

fetchNbaStats();
fetchBio();

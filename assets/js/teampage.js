var WIKIAPI =
  "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=";
// %20 indicates a space in the URL

var TEAMID = localStorage.getItem("teamID");
var TEAMNAME;
var TEAMCITY;

//2 is suppose to be a var we get from url
var NBAPI = "https://www.balldontlie.io/api/v1/teams/" + TEAMID;

function fetchNbaStats() {
  fetch(NBAPI).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        TEAMNAME = data.name;
        TEAMCITY = data.city;

        let teamConference = data.conference;
        let teamDivision = data.division;

        let teamImage = $("<object>");
        teamImage.attr(
          "data",
          "./assets/images/" + data.abbreviation + "-" + TEAMNAME + ".svg"
        );

        teamImage.attr("width", "400");
        teamImage.attr("height", "400");

        $("#team-logo").append(teamImage);

        $("#city-name").text("Team City: " + TEAMCITY);
        $("#team-name").text("Team Name: " + TEAMNAME);
        $("#conference").text("Converence: " + teamConference);
        $("#division").text("Division: " + teamDivision);
      });
    }
  });
}

function fetchBio() {}

fetchNbaStats();
fetchBio();

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
        $("#conference").text("Conference: " + teamConference);
        $("#division").text("Division: " + teamDivision);
        fetchBio(TEAMCITY, TEAMNAME);
      });
    }
  });
}

function fetchBio(teamCity, teamName) {
  let wikiApi =
    "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" +
    teamCity +
    "%20" +
    teamName;

  // %20 indicates a space in the URL

  fetch(wikiApi).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        let pageid = data.query.pages[0];
        console.log(pageid);
        console.dir(data.query.pages);

        $("#bio-title").text("About the " + teamCity + " " + teamName);
        let bio = $("<p>");
        bio.text(data.query.pages[Object.keys(data.query.pages)[0]].extract);
        let link = $("<a>");
        link.attr(
          "href",
          "https://en.wikipedia.org/wiki/" + teamCity + "_" + teamName
        );
        link.text(" Read more here.");
        bio.append(link);
        $("#team-bio").append(bio);
      });
    }
  });
}

fetchNbaStats();

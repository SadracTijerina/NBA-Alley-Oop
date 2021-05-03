//ADD NBA TEAM ID AT THE END
var NBAPI = "https://www.balldontlie.io/api/v1/teams/";

var TEAMKEY;

$(".container").on("click", "img", function () {
  TEAMKEY = this.id;

  document.location.replace("./teampage.html");
});

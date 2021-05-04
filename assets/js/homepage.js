var TEAMKEY;

$(".container").on("click", "img", function () {
  TEAMKEY = this.id;

  localStorage.clear();
  localStorage.setItem("teamID", TEAMKEY);

  document.location.replace("./teampage.html");
});

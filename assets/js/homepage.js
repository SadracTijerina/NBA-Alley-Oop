var TEAMKEY;

$(".container").on("click", "img", function () {
  TEAMKEY = this.id;

  //document.location.replace("./teampage.html&id=" + TEAMKEY); RESPONSIVE
  document.location.replace("./teampage.html");
});

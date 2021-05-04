var TEAMKEY;

$(".container").on("click", "img", function () {
  TEAMKEY = this.id;

  console.log(TEAMKEY);

  document.location.replace("./teampage.html&id=" + TEAMKEY);
  //document.location.replace("./teampage.html");
});

console.log("webpage now active");

$("#menuMobile").click(() => {
  $("#menuMobile").css("display", "none");
  $("#menu").css("display", "flex");
  $("#nav__close").css("display", "block");
});
$("#menu").click(() => {
  $("#menu").css("display", "none");
  $("#menuMobile").css("display", "block");
});

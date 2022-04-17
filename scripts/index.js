$("#menuMobile").click(() => {
  $("#menuMobile").css("display", "none");
  $("#menu").css("display", "flex");
  $("#nav__close").css("display", "block");
});
$("#nav__close").click(() => {
  $("#menu").css("display", "none");
  $("#menuMobile").css("display", "block");
});
$("#link_sobre").click(() => {
  $("#menu").css("display", "none");
  $("#menuMobile").css("display", "block");
});
$("#link_projetos").click(() => {
  $("#menu").css("display", "none");
  $("#menuMobile").css("display", "block");
});
$("#link_contato").click(() => {
  $("#menu").css("display", "none");
  $("#menuMobile").css("display", "block");
});

$(document).ready($(window).bind("resize", CheckPx));

function CheckPx() {
  if ($(window).width() > 500) {
    $("#menu").css("display", "block");
    $("#menuMobile").css("display", "none");
    $("#nav__close").css("display", "none");
  }
  if ($(window).width() <= 500) {
    $("#menu").css("display", "none");
    $("#menuMobile").css("display", "block");
  }
}

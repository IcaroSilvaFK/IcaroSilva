const $imgs = $("#tecnologies img");

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

ScrollReveal({ distance: "60px" });
ScrollReveal().reveal("#text", { origin: "left", mobile: true });
ScrollReveal().reveal("#imgPrincipal", { origin: "right", mobile: true });
ScrollReveal().reveal("#projetos__container", {
  origin: "left",
  mobile: true,
});

ScrollReveal().reveal($imgs, {
  origin: "bottom",
  mobile: true,
});

// $imgs.each((index, value) => $(value).css("display", "none"));
// $imgs.each((index, value) => {
//   setTimeout(() => {
//     $(value).css("display", "block");
//     ScrollReveal().reveal(value, {
//       opacity: 0,
//     });
//   }, index * 1000);
// });

ScrollReveal().reveal("#imgSobre", {
  scale: 0.8,
  mobile: true,
});

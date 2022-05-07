const $imgs = $("#tecnologies img");
const $ulAnimation = document.getElementById("listAnimation");

$("#menuMobile").click(() => {
  $("#menuMobile").css("display", "none");
  $("#menu").css("display", "flex");
  $("#nav__close").css("display", "block");
});
$("#nav__close").click(() => {
  $("#menu").css("display", "none");
  $("#menuMobile").css("display", "block");
});

$(document).ready($(window).bind("resize", CheckPx));

const $title = $("#title");

$title.ready(() => {
  const newArray = $title.text().split("");
  $title[0].innerHTML = "";

  newArray.forEach((element, index) => {
    console.log(element);
    setTimeout(() => {
      $title[0].innerHTML += element;
    }, 400 * index);
  });
});

function CheckPx() {
  if ($(window).width() > 500) {
    $("#menu").css("display", "block");
    $("#menuMobile").css("display", "none");
    $("#nav__close").css("display", "none");
  }
  if ($(window).width() <= 500) {
    $("#menu").css("display", "none");
    $("#menuMobile").css("display", "block");

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
  }
}

for (let item = 1; item < 11; item++) {
  const list = document.createElement("li");
  list.classList.add("animateItem");

  const randleSize = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const size = Math.floor(randleSize(80, 10));
  const postion = randleSize(1, 99);
  const delay = randleSize(5, 0.1);
  const duration = randleSize(24, 12);

  list.style.width = `${size}px`;
  list.style.height = `${size}px`;
  list.style.bottom = `-${size}px`;
  list.style.left = `${postion}%`;

  list.style.animationDelay = `${delay}s`;
  list.style.animationDuration = `${duration}s`;
  list.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`;

  $ulAnimation.appendChild(list);
}

ScrollReveal({ distance: "60px" });
ScrollReveal().reveal("#text", { origin: "left" });
ScrollReveal().reveal("#imgPrincipal", { origin: "right" });
ScrollReveal().reveal("#projetos__container", {
  origin: "left",
});

ScrollReveal().reveal($imgs, {
  origin: "bottom",
});

ScrollReveal().reveal("#imgSobre", {
  scale: 0.8,
  mobile: true,
});

async function getProjetcts() {
  try {
    const response = await fetch("https://api.github.com/users/IcaroSilvaFK");
    const data = await response.json();
    console.log(data);
    // const array = data.reduce((acc, element) => acc.concat(element.name), []);
    // console.log(array);
  } catch (e) {
    console.log(e);
  }
}

getProjetcts();

//Burger Menu
let burgerMenu = document.querySelector(".nav-bar__burger-menu");
let navBar = document.querySelector(".nav-bar__container");

burgerMenu.addEventListener("click", () => {
  navBar.classList.toggle("active");
  burgerMenu.classList.toggle("animation");
});

// Header is hidden/shown when scrolled
let initialScroll = window.scrollY;

window.addEventListener("scroll", function () {
  let newScroll = window.scrollY;
  let width = window.innerWidth;

  if (width > 1000 && initialScroll >= newScroll) {
    document.getElementById("header").style.top = "40px";
  } else if (width > 1000 && initialScroll <= newScroll) {
    document.getElementById("header").style.top = "-120px";
  }

  if (width < 1000 && initialScroll >= newScroll) {
    document.getElementById("header").style.top = "0px";
  } else if (width < 1000 && initialScroll <= newScroll) {
    document.getElementById("header").style.top = "-120px";
  }

  initialScroll = newScroll;
});

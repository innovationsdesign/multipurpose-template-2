const swiper = new Swiper(".hero-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 4000, // time in milliseconds between slides (3s here)
    disableOnInteraction: false, // keeps autoplay working after user interacts
  },

  // Navigation arrows345
  navigation: {
    nextEl: ".swiper-hero-button-next",
    prevEl: ".swiper-hero-button-prev",
  },
});

//menu icon
const menuIcon = document.querySelector(".menu-icon");
const navWrapper = document.querySelector(".nav-wrapper");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

menuIcon.addEventListener("click", function () {
  navWrapper.classList.toggle("show-menu");
  menuIcon.classList.toggle("show-icon");
});

/*service swiper */
const Serviceswiper = new Swiper(".service-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows345
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

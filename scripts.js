const swiper = new Swiper(".hero-swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: false, // Start with autoplay disabled
  navigation: {
    nextEl: ".swiper-hero-button-next",
    prevEl: ".swiper-hero-button-prev",
  },
});

const video = document.getElementById("hero-video");

// Optional: Block user from manually skipping before video ends
swiper.allowTouchMove = false;

// Autoplay the video if possible
video.play().catch((err) => {
  console.warn("Video autoplay failed:", err);
});

// When the video ends, move to next slide and start autoplay
video.addEventListener("ended", function () {
  swiper.slideNext(); // Move to next slide
  swiper.params.autoplay = {
    delay: 4000,
    disableOnInteraction: false,
  };
  swiper.autoplay.start(); // Start autoplay after video
  swiper.allowTouchMove = true; // Re-enable manual swiping
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

const swiper = new Swiper(".hero-swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: false, // Start with autoplay disabled
  navigation: {
    nextEl: ".swiper-hero-button-next",
    prevEl: ".swiper-hero-button-prev",
  },
  on: {
    slideChange: function (swiper) {
      // Pass 'swiper' as a parameter here
      // Now you can safely use 'swiper' inside this function
      const currentSlide = swiper.slides[swiper.activeIndex];
      const video = currentSlide.querySelector("video");

      // Pause all videos (just in case)
      document.querySelectorAll("video").forEach((vid) => {
        vid.pause();
        vid.currentTime = 0;
      });

      // If we’re back to the real first slide with video
      if (video && swiper.realIndex === 0) {
        swiper.autoplay.stop(); // Stop autoplay while video plays
        swiper.allowTouchMove = false; // Optional: prevent user skipping

        video.play().catch((err) => {
          console.warn("Video replay failed:", err);
        });

        video.onended = function () {
          swiper.slideNext();
          swiper.params.autoplay = {
            delay: 4000,
            disableOnInteraction: false,
          };
          swiper.autoplay.start();
          swiper.allowTouchMove = true;
        };
      }
    },
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

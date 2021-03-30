import "bootstrap";
import "./scss/style.scss";

import "@fortawesome/fontawesome-free/css/all.css";

import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css";

const myCustomSlider = document.querySelectorAll(".swiper-hero");
const myCustomGalleryThumbs = document.querySelectorAll(".swiper-testimonial");

for (let i = 0; i < myCustomSlider.length; i++) {
  myCustomSlider[i].classList.add("swiper-hero-" + i);
  myCustomGalleryThumbs[i].classList.add("swiper-testimonial-" + i);

  var galleryThumbs = new Swiper(".swiper-testimonial-" + i, {
    pagination: {
      el: ".testimonial-pagination",
      type: "bullets",
      clickable: true,
    },
    spaceBetween: 10,
    slidesPerView: 1,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  var galleryTop = new Swiper(".swiper-hero-" + i, {
    effect: "slide",
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
}

const humburger = document.querySelector(".humburger");
const navigation = document.querySelector(".navigation");
const bars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");
const links = document.querySelectorAll("a");

humburger.addEventListener("click", () => {
  bars.classList.toggle("active");
  times.classList.toggle("active");
  if (times.classList.contains("active")) {
    navigation.classList.add("show");
  } else {
    navigation.classList.remove("show");
  }
});

links.forEach((element) => {
  element.addEventListener("click", () => {
    navigation.classList.remove("show");
    if (bars.classList.contains("active")) {
      bars.classList.remove("active");
      times.classList.add("active");
    }
    if (times.classList.contains("active")) {
      times.classList.remove("active");
      bars.classList.add("active");
    }
  });
});

window.addEventListener("resize",()=>{
  if (document.body.clientWidth >770) {
    navigation.classList.remove("show");
    times.classList.remove("active");
    bars.classList.add("active");
  }
});



